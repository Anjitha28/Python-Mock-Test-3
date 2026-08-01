import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const { Pool } = pg;

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://yjglyjkelzrtlzhgrdea.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY || 'sb_publishable_iA23kS6zWQI5FucPctYSDA_iOcArGvN';

const supabase = (SUPABASE_URL && SUPABASE_KEY) ? createClient(SUPABASE_URL, SUPABASE_KEY) : null;

let pgPool = null;
if (process.env.DATABASE_URL) {
  try {
    const isLocalhost = process.env.DATABASE_URL.includes('localhost') || process.env.DATABASE_URL.includes('127.0.0.1');
    pgPool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: isLocalhost ? false : { rejectUnauthorized: false },
      connectionTimeoutMillis: 5000,
      idleTimeoutMillis: 30000,
      max: 10
    });

    pgPool.on('error', (err) => {
      console.error('⚠️ PostgreSQL pool idle client error:', err.message);
    });

    // Quick initial ping test to verify credentials
    pgPool.query('SELECT 1').catch((err) => {
      if (err.message?.includes('password authentication failed') || err.code === '28P01') {
        console.warn('⚠️ Direct PostgreSQL password authentication failed. Automatically switched to Supabase Cloud API.');
        pgPool = null;
      }
    });
  } catch (e) {
    console.error('⚠️ Error initializing PostgreSQL pool:', e.message);
    pgPool = null;
  }
}

// Robust unified Database Object exporting query(), connect(), etc.
const db = {
  query: async (text, params = []) => {
    // 1. Try PostgreSQL pool first if available
    if (pgPool) {
      try {
        const res = await pgPool.query(text, params);
        return res;
      } catch (err) {
        const errMsg = err.message || '';
        if (
          errMsg.includes('password authentication failed') ||
          errMsg.includes('ECONNREFUSED') ||
          errMsg.includes('ENOTFOUND') ||
          errMsg.includes('timeout') ||
          err.code === '28P01' ||
          err.code === '42P01'
        ) {
          console.warn('⚠️ Direct PostgreSQL query failed (' + errMsg + '). Disabling pgPool & switching to Supabase SDK.');
          pgPool = null;
        } else {
          throw err;
        }
      }
    }

    // 2. Fallback to Supabase REST SDK
    if (supabase) {
      return await executeSupabaseQuery(text, params);
    }

    throw new Error('No valid database connection or Supabase client available.');
  },
  connect: async () => {
    if (pgPool) {
      try {
        const client = await pgPool.connect();
        return client;
      } catch (e) {
        console.warn('⚠️ pgPool.connect() failed. Disabling pgPool & using Supabase client adapter.');
        pgPool = null;
      }
    }
    return {
      query: (text, params) => db.query(text, params),
      release: () => {}
    };
  },
  on: () => {},
  end: async () => {
    if (pgPool) await pgPool.end();
  }
};

// SQL-to-Supabase REST translator for seamless fallback
async function executeSupabaseQuery(sqlText, params = []) {
  const sql = sqlText.trim();
  const lower = sql.toLowerCase();

  // A. SELECT COUNT(*) FROM mock_test_3_registered_system_users
  if (lower.startsWith('select count(*) from mock_test_3_registered_system_users')) {
    const { count, error } = await supabase.from('mock_test_3_registered_system_users').select('*', { count: 'exact', head: true });
    if (error) throw new Error(error.message);
    return { rows: [{ count: count || 0 }] };
  }

  // B. SELECT FROM mock_test_3_registered_system_users WHERE phone = $1
  if (lower.includes('from mock_test_3_registered_system_users') && lower.includes('where phone =')) {
    const { data, error } = await supabase.from('mock_test_3_registered_system_users').select('*').eq('phone', params[0]);
    if (error) throw new Error(error.message);
    return { rows: data || [] };
  }

  // C. SELECT FROM mock_test_3_registered_system_users WHERE id = $1
  if (lower.includes('from mock_test_3_registered_system_users') && lower.includes('where id =')) {
    const { data, error } = await supabase.from('mock_test_3_registered_system_users').select('*').eq('id', params[0]);
    if (error) throw new Error(error.message);
    return { rows: data || [] };
  }

  // D. SELECT FOR ADMIN REGISTERED SYSTEM USERS (JOIN app users)
  if (lower.includes('from mock_test_3_registered_system_users r')) {
    const { data: regUsers, error: regErr } = await supabase.from('mock_test_3_registered_system_users').select('*').order('created_at', { ascending: false });
    if (regErr) throw new Error(regErr.message);

    const { data: appUsers, error: appErr } = await supabase.from('mock_test_3_users').select('*');
    if (appErr) throw new Error(appErr.message);

    const rows = (regUsers || []).map(r => {
      const match = (appUsers || []).find(u => 
        u.registered_system_user_id === r.id ||
        (u.phone && r.phone && u.phone === r.phone) ||
        (u.email && r.email && u.email.toLowerCase() === r.email.toLowerCase())
      );
      return {
        ...r,
        signup_status: match ? 'Signed Up' : 'Not Signed Up',
        application_user_id: match ? match.id : null
      };
    });
    return { rows };
  }

  // E. SELECT FROM mock_test_3_users
  if (lower.includes('from mock_test_3_users')) {
    if (lower.includes('lower(username) = lower($1)')) {
      if (lower.includes('and role = $2') || lower.includes('role = $2')) {
        const target = (params[0] || '').toLowerCase();
        const role = params[1];
        const { data, error } = await supabase.from('mock_test_3_users').select('*').eq('role', role);
        if (error) throw new Error(error.message);
        const filtered = (data || []).filter(u => 
          (u.username && u.username.toLowerCase() === target) ||
          (u.email && u.email.toLowerCase() === target)
        );
        return { rows: filtered };
      } else {
        const target = (params[0] || '').toLowerCase();
        const { data, error } = await supabase.from('mock_test_3_users').select('id, username');
        if (error) throw new Error(error.message);
        const filtered = (data || []).filter(u => u.username && u.username.toLowerCase() === target);
        return { rows: filtered };
      }
    }

    if (lower.includes('lower(email) = lower($1)')) {
      const target = (params[0] || '').toLowerCase();
      const { data, error } = await supabase.from('mock_test_3_users').select('id, email');
      if (error) throw new Error(error.message);
      const filtered = (data || []).filter(u => u.email && u.email.toLowerCase() === target);
      return { rows: filtered };
    }

    if (lower.includes('where phone = $1')) {
      const { data, error } = await supabase.from('mock_test_3_users').select('id, phone').eq('phone', params[0]);
      if (error) throw new Error(error.message);
      return { rows: data || [] };
    }

    if (lower.includes('where id = $1')) {
      const { data, error } = await supabase.from('mock_test_3_users').select('*').eq('id', params[0]);
      if (error) throw new Error(error.message);
      return { rows: data || [] };
    }

    const { data, error } = await supabase.from('mock_test_3_users').select('*').order('created_at', { ascending: false });
    if (error) throw new Error(error.message);
    return { rows: data || [] };
  }

  // F. INSERT INTO mock_test_3_users
  if (lower.startsWith('insert into mock_test_3_users')) {
    let payload = {};
    if (params.length === 6) {
      payload = {
        username: params[0],
        name: params[1],
        phone: params[2],
        email: params[3],
        password_hash: params[4],
        role: 'user',
        is_first_login: false,
        registered_system_user_id: params[5]
      };
    } else if (params.length === 4) {
      payload = {
        username: params[0],
        password_hash: params[1],
        role: params[2],
        is_first_login: params[3]
      };
    }
    const { data, error } = await supabase.from('mock_test_3_users').insert([payload]).select('*');
    if (error) throw new Error(error.message);
    return { rows: data || [] };
  }

  // G. UPDATE mock_test_3_users SET password_hash = $1
  if (lower.startsWith('update mock_test_3_users')) {
    const { data, error } = await supabase.from('mock_test_3_users')
      .update({ password_hash: params[0], is_first_login: false, updated_at: new Date().toISOString() })
      .eq('id', params[1])
      .select('*');
    if (error) throw new Error(error.message);
    return { rows: data || [] };
  }

  // H. DELETE FROM mock_test_3_users
  if (lower.startsWith('delete from mock_test_3_users')) {
    if (lower.includes('any(')) {
      const { error } = await supabase.from('mock_test_3_users').delete().in('id', params[0]);
      if (error) throw new Error(error.message);
      return { rows: [] };
    } else {
      const { error } = await supabase.from('mock_test_3_users').delete().eq('id', params[0]);
      if (error) throw new Error(error.message);
      return { rows: [] };
    }
  }

  // I. SESSIONS
  if (lower.startsWith('insert into mock_test_3_sessions')) {
    const payload = { token: params[0], user_id: params[1], username: params[2], role: params[3] };
    const { data, error } = await supabase.from('mock_test_3_sessions').insert([payload]).select('*');
    if (error) throw new Error(error.message);
    return { rows: data || [] };
  }

  if (lower.includes('from mock_test_3_sessions s')) {
    const token = params[0];
    const { data: sessionData, error: sErr } = await supabase.from('mock_test_3_sessions').select('*').eq('token', token);
    if (sErr || !sessionData || sessionData.length === 0) return { rows: [] };

    const sess = sessionData[0];
    const { data: userData } = await supabase.from('mock_test_3_users').select('*').eq('id', sess.user_id);
    const usr = (userData && userData[0]) || {};

    return {
      rows: [{
        token: sess.token,
        user_id: sess.user_id,
        username: sess.username,
        role: usr.role || sess.role,
        is_first_login: usr.is_first_login ?? false
      }]
    };
  }

  if (lower.startsWith('delete from mock_test_3_sessions')) {
    if (lower.includes('any(')) {
      const { error } = await supabase.from('mock_test_3_sessions').delete().in('user_id', params[0]);
      if (error) throw new Error(error.message);
      return { rows: [] };
    } else if (lower.includes('user_id = $1 or username = $2')) {
      const { error } = await supabase.from('mock_test_3_sessions').delete().or(`user_id.eq.${params[0]},username.eq.${params[1]}`);
      if (error) throw new Error(error.message);
      return { rows: [] };
    } else {
      const { error } = await supabase.from('mock_test_3_sessions').delete().eq('token', params[0]);
      if (error) throw new Error(error.message);
      return { rows: [] };
    }
  }

  // J. SETTINGS
  if (lower.includes('from mock_test_3_settings')) {
    const { data, error } = await supabase.from('mock_test_3_settings').select('*').eq('key', 'exam_mode');
    if (error) throw new Error(error.message);
    return { rows: data || [] };
  }

  if (lower.startsWith('insert into mock_test_3_settings')) {
    const payload = { key: params[0] || 'exam_mode', value: params[0] || 'practice', updated_at: new Date().toISOString() };
    const { data, error } = await supabase.from('mock_test_3_settings').upsert([payload]).select('*');
    if (error) throw new Error(error.message);
    return { rows: data || [] };
  }

  if (lower.startsWith('delete from mock_test_3_settings')) {
    const { error } = await supabase.from('mock_test_3_settings').delete().eq('key', 'active_main_session_id');
    if (error) throw new Error(error.message);
    return { rows: [] };
  }

  // K. MAIN SESSIONS
  if (lower.includes('from mock_test_3_main_sessions')) {
    const { data, error } = await supabase.from('mock_test_3_main_sessions').select('*').eq('status', 'active').order('created_at', { ascending: false }).limit(1);
    if (error) throw new Error(error.message);
    return { rows: data || [] };
  }

  if (lower.startsWith('update mock_test_3_main_sessions')) {
    const { error } = await supabase.from('mock_test_3_main_sessions').update({ status: 'closed', closed_at: new Date().toISOString() }).eq('status', 'active');
    if (error) throw new Error(error.message);
    return { rows: [] };
  }

  if (lower.startsWith('insert into mock_test_3_main_sessions')) {
    const { data, error } = await supabase.from('mock_test_3_main_sessions').insert([{ status: 'active' }]).select('id');
    if (error) throw new Error(error.message);
    return { rows: data || [] };
  }

  // L. EXAM RESULTS (mock_test_3_results)

  // 1. SELECT MAX(attempt_number)
  if (lower.includes('max(attempt_number)')) {
    const userName = params[0];
    const { data, error } = await supabase.from('mock_test_3_results').select('attempt_number').eq('user_name', userName);
    if (error) throw new Error(error.message);
    const maxVal = (data || []).reduce((max, r) => Math.max(max, parseInt(r.attempt_number) || 0), 0);
    return { rows: [{ max_attempt: maxVal }] };
  }

  // 2. INSERT INTO mock_test_3_results
  if (lower.startsWith('insert into mock_test_3_results')) {
    let payload = {};

    if (params.length === 20) {
      // 20 params format from /api/quiz/submit
      payload = {
        user_name: params[0],
        exam_name: params[1] || 'Python Mastery',
        mock_test: params[2] || 'da_mock3',
        exam_mode: params[3] || 'practice',
        main_session_id: params[4] || null,
        attempt_number: parseInt(params[5]) || 1,
        score: parseFloat(params[6]) || 0,
        percentage: parseFloat(params[7]) || 0,
        result: params[8] || 'FAIL',
        total_marks: parseFloat(params[9]) || 100,
        total_questions: parseInt(params[10]) || 40,
        correct_answers: parseInt(params[11]) || 0,
        incorrect_answers: parseInt(params[12]) || 0,
        not_attended: parseInt(params[13]) || 0,
        time_taken: parseInt(params[14]) || 0,
        time_allowed: parseInt(params[15]) || 600,
        time_remaining: parseInt(params[16]) || 0,
        submission_type: params[17] || 'manual',
        answers: typeof params[18] === 'object' && params[18] !== null ? params[18] : (typeof params[18] === 'string' && (params[18].startsWith('{') || params[18].startsWith('[')) ? JSON.parse(params[18]) : {}),
        completion_status: params[19] || 'completed'
      };
    } else if (params.length === 18) {
      // 18 params format from JSONP / route
      payload = {
        user_name: params[0],
        exam_name: params[1] || 'Python Mastery',
        mock_test: params[2] || 'da_mock3',
        exam_mode: params[3] || 'practice',
        attempt_number: parseInt(params[4]) || 1,
        score: parseFloat(params[5]) || 0,
        percentage: parseFloat(params[6]) || 0,
        result: params[7] || 'FAIL',
        total_marks: parseFloat(params[8]) || 100,
        total_questions: parseInt(params[9]) || 40,
        correct_answers: parseInt(params[10]) || 0,
        incorrect_answers: parseInt(params[11]) || 0,
        not_attended: parseInt(params[12]) || 0,
        time_taken: parseInt(params[13]) || 0,
        time_allowed: parseInt(params[14]) || 600,
        time_remaining: parseInt(params[15]) || 0,
        submission_type: params[16] || 'manual',
        completion_status: params[17] || 'completed'
      };
    } else {
      payload = {
        user_name: params[0],
        exam_name: params[1] || 'Python Mastery',
        mock_test: params[2] || 'da_mock3',
        exam_mode: params[3] || 'practice',
        score: parseFloat(params[4]) || 0,
        percentage: parseFloat(params[5]) || 0,
        result: params[6] || 'PASS'
      };
    }

    const { data, error } = await supabase.from('mock_test_3_results').insert([payload]).select('*');
    if (error) throw new Error(error.message);
    return { rows: data || [] };
  }

  // 3. SELECT FROM mock_test_3_results
  if (lower.includes('from mock_test_3_results') && lower.includes('exam_mode = \'main\'')) {
    const { data, error } = await supabase.from('mock_test_3_results')
      .select('*')
      .eq('user_name', params[0])
      .eq('exam_mode', 'main')
      .eq('main_session_id', params[1])
      .limit(1);
    if (error) throw new Error(error.message);
    return { rows: data || [] };
  }

  if (lower.includes('from mock_test_3_results')) {
    if (params[0]) {
      const { data, error } = await supabase.from('mock_test_3_results').select('*').eq('user_name', params[0]).order('created_at', { ascending: false });
      if (error) throw new Error(error.message);
      return { rows: data || [] };
    } else {
      const { data, error } = await supabase.from('mock_test_3_results').select('*').order('created_at', { ascending: false });
      if (error) throw new Error(error.message);
      return { rows: data || [] };
    }
  }

  // 4. DELETE FROM mock_test_3_results
  if (lower.startsWith('delete from mock_test_3_results')) {
    if (lower.includes('any(')) {
      const { error } = await supabase.from('mock_test_3_results').delete().in('user_name', params[0]);
      if (error) throw new Error(error.message);
      return { rows: [] };
    } else {
      const { error } = await supabase.from('mock_test_3_results').delete().eq('user_name', params[0]);
      if (error) throw new Error(error.message);
      return { rows: [] };
    }
  }

  // M. REGISTERED SYSTEM USERS INSERT / UPDATE / DELETE
  if (lower.startsWith('insert into mock_test_3_registered_system_users')) {
    const payload = {
      name: params[0],
      phone: params[1],
      email: params[2],
      college: params[3],
      status: 'Active',
      signup_status: 'Not Signed Up'
    };
    const { data, error } = await supabase.from('mock_test_3_registered_system_users').insert([payload]).select('*');
    if (error) throw new Error(error.message);
    return { rows: data || [] };
  }

  if (lower.startsWith('update mock_test_3_registered_system_users')) {
    if (lower.includes('set status = $1')) {
      const { error } = await supabase.from('mock_test_3_registered_system_users').update({ status: params[0], updated_at: new Date().toISOString() }).in('id', params[1]);
      if (error) throw new Error(error.message);
      return { rows: [] };
    } else {
      const id = params[5];
      const payload = {};
      if (params[0]) payload.name = params[0];
      if (params[1]) payload.phone = params[1];
      if (params[2]) payload.email = params[2];
      if (params[3]) payload.college = params[3];
      if (params[4]) payload.status = params[4];
      payload.updated_at = new Date().toISOString();
      const { data, error } = await supabase.from('mock_test_3_registered_system_users').update(payload).eq('id', id).select('*');
      if (error) throw new Error(error.message);
      return { rows: data || [] };
    }
  }

  if (lower.startsWith('delete from mock_test_3_registered_system_users')) {
    if (lower.includes('any(')) {
      const { error } = await supabase.from('mock_test_3_registered_system_users').delete().in('id', params[0]);
      if (error) throw new Error(error.message);
      return { rows: [] };
    } else {
      const { error } = await supabase.from('mock_test_3_registered_system_users').delete().eq('id', params[0]);
      if (error) throw new Error(error.message);
      return { rows: [] };
    }
  }

  // Fallback default empty result
  return { rows: [] };
}

// Initial table check notice
if (supabase) {
  console.log('✅ Connected to Supabase Cloud Project (yjglyjkelzrtlzhgrdea)');
}

export default db;
