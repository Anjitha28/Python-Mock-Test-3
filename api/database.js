import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const { Pool } = pg;

// A dummy pool object that mimics the pg Pool interface just enough to not crash routes
const dummyPool = {
    query: async () => {
        console.warn('⚠️ No database connected, skipping query.');
        return { rows: [] };
    }
};

let activePool = dummyPool;

if (!process.env.DATABASE_URL) {
  console.warn('⚠️ DATABASE_URL is not set in environment variables.');
  console.warn('⚠️ Backend will run, but database features will fail silently.');
} else {
  activePool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  activePool.on('error', (err) => {
    console.error('⚠️ PostgreSQL pool idle client error:', err.message);
  });

  activePool.connect(async (err, client, release) => {
    if (err) {
      console.error('❌ Failed to connect to PostgreSQL:', err.message);
      console.warn('⚠️ Server will run without persistent DB storage.');
    } else {
      console.log('✅ Connected to Supabase PostgreSQL database for Mock Test 3');
      try {
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

        // Migrations for existing mock_test_3_results table
        await client.query(`
          ALTER TABLE mock_test_3_results ADD COLUMN IF NOT EXISTS exam_mode TEXT DEFAULT 'practice';
          ALTER TABLE mock_test_3_results ADD COLUMN IF NOT EXISTS incorrect_answers INTEGER DEFAULT 0;
          ALTER TABLE mock_test_3_results ADD COLUMN IF NOT EXISTS not_attended INTEGER DEFAULT 0;
          ALTER TABLE mock_test_3_results ADD COLUMN IF NOT EXISTS time_allowed INTEGER DEFAULT 600;
          ALTER TABLE mock_test_3_results ADD COLUMN IF NOT EXISTS answers JSONB DEFAULT '{}'::jsonb;
          ALTER TABLE mock_test_3_results ADD COLUMN IF NOT EXISTS completion_status TEXT DEFAULT 'completed';
        `);
        console.log('✅ mock_test_3_results table is ready');

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
        console.log('✅ mock_test_3_settings table is ready');

        // Ensure mock_test_3_users table exists
        await client.query(`
          CREATE TABLE IF NOT EXISTS mock_test_3_users (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            username TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            role TEXT NOT NULL DEFAULT 'user',
            is_first_login BOOLEAN NOT NULL DEFAULT true,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
          );
        `);
        console.log('✅ mock_test_3_users table is ready');

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
        console.log('✅ mock_test_3_sessions table is ready');

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
          console.log('✅ Default Admin account (admin123 / admin@123) seeded');
        }
      } catch (e) {
        console.error('❌ Table/Seed initialization failed:', e.message);
      } finally {
        release();
      }
    }
  });
}

export default activePool;
