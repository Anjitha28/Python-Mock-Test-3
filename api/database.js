import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const { Pool } = pg;

// A safe fallback pool object for serverless environments when DB is unconfigured
const dummyPool = {
    query: async (text, params) => {
        console.warn('⚠️ PostgreSQL query fallback (DATABASE_URL not set or connecting):', text?.substring(0, 50));
        if (text?.toLowerCase().includes('select * from mock_test_3_users')) {
            return { rows: [{ id: 'a9b7223a-100f-4383-b552-74970f5b800f', username: 'admin123', role: 'admin', is_first_login: false }] };
        }
        if (text?.toLowerCase().includes('mock_test_3_settings')) {
            return { rows: [{ key: 'exam_mode', value: 'practice' }] };
        }
        return { rows: [] };
    },
    connect: async () => dummyPool,
    release: () => {},
    on: () => {},
    end: async () => {}
};

let activePool = dummyPool;

if (!process.env.DATABASE_URL) {
  console.warn('⚠️ DATABASE_URL is not set in environment variables.');
} else {
  try {
    activePool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      },
      connectionTimeoutMillis: 15000,
      idleTimeoutMillis: 30000,
      max: 10
    });

    activePool.on('error', (err) => {
      console.error('⚠️ PostgreSQL pool idle client error:', err.message);
    });

    // Run table initializations asynchronously
    initTables(activePool).catch(err => {
      console.error('⚠️ Non-blocking DB init notice:', err.message);
    });
  } catch (e) {
    console.error('⚠️ Error initializing PostgreSQL pool:', e.message);
    activePool = dummyPool;
  }
}

async function initTables(poolInstance) {
  let client;
  try {
    client = await poolInstance.connect();
    // Ensure mock_test_3_results table exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS mock_test_3_results (
        id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_name        TEXT NOT NULL,
        exam_name        TEXT,
        mock_test        TEXT,
        exam_mode        TEXT NOT NULL DEFAULT 'practice',
        attempt_number   INTEGER,
        score            NUMERIC NOT NULL,
        percentage       NUMERIC NOT NULL,
        result           TEXT,
        total_marks      NUMERIC,
        total_questions  INTEGER,
        correct_answers  INTEGER DEFAULT 0,
        incorrect_answers INTEGER DEFAULT 0,
        not_attended     INTEGER DEFAULT 0,
        time_taken       INTEGER,
        time_allowed     INTEGER DEFAULT 600,
        time_remaining   INTEGER,
        submission_type  TEXT,
        answers          JSONB DEFAULT '{}'::jsonb,
        completion_status TEXT DEFAULT 'completed',
        created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);

    await client.query(`
      ALTER TABLE mock_test_3_results ADD COLUMN IF NOT EXISTS exam_mode TEXT DEFAULT 'practice';
      ALTER TABLE mock_test_3_results ADD COLUMN IF NOT EXISTS incorrect_answers INTEGER DEFAULT 0;
      ALTER TABLE mock_test_3_results ADD COLUMN IF NOT EXISTS not_attended INTEGER DEFAULT 0;
      ALTER TABLE mock_test_3_results ADD COLUMN IF NOT EXISTS time_allowed INTEGER DEFAULT 600;
      ALTER TABLE mock_test_3_results ADD COLUMN IF NOT EXISTS answers JSONB DEFAULT '{}'::jsonb;
      ALTER TABLE mock_test_3_results ADD COLUMN IF NOT EXISTS completion_status TEXT DEFAULT 'completed';
    `);

    // Ensure mock_test_3_settings table exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS mock_test_3_settings (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await client.query(`
      INSERT INTO mock_test_3_settings (key, value)
      VALUES ('exam_mode', 'practice')
      ON CONFLICT (key) DO NOTHING;
    `);

    // Ensure mock_test_3_users table exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS mock_test_3_users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        username TEXT UNIQUE NOT NULL,
        name TEXT,
        phone TEXT,
        email TEXT UNIQUE,
        password_hash TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'user',
        is_first_login BOOLEAN NOT NULL DEFAULT true,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);

    await client.query(`
      ALTER TABLE mock_test_3_users ADD COLUMN IF NOT EXISTS name TEXT;
      ALTER TABLE mock_test_3_users ADD COLUMN IF NOT EXISTS phone TEXT;
      ALTER TABLE mock_test_3_users ADD COLUMN IF NOT EXISTS email TEXT;
      CREATE UNIQUE INDEX IF NOT EXISTS idx_mock_test_3_users_email ON mock_test_3_users (LOWER(email)) WHERE email IS NOT NULL;
    `);

    // Ensure mock_test_3_sessions table exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS mock_test_3_sessions (
        token TEXT PRIMARY KEY,
        user_id UUID NOT NULL REFERENCES mock_test_3_users(id) ON DELETE CASCADE,
        username TEXT NOT NULL,
        role TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);

    // Seed default Admin if not exists
    const adminCheck = await client.query('SELECT * FROM mock_test_3_users WHERE username = $1', ['admin123']);
    if (adminCheck.rows.length === 0) {
      const crypto = await import('crypto');
      const salt = crypto.randomBytes(16).toString('hex');
      const hash = crypto.pbkdf2Sync('admin@123', salt, 10000, 64, 'sha512').toString('hex');
      const adminPasswordHash = `${salt}:${hash}`;

      await client.query(
        `INSERT INTO mock_test_3_users (username, password_hash, role, is_first_login) VALUES ($1, $2, $3, $4)`,
        ['admin123', adminPasswordHash, 'admin', false]
      );
    }
  } catch (err) {
    console.error('⚠️ DB Init Error:', err.message);
  } finally {
    if (client) client.release();
  }
}

export default activePool;
