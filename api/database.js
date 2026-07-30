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

  activePool.connect((err, client, release) => {
    if (err) {
      console.error('❌ Failed to connect to PostgreSQL:', err.message);
    } else {
      console.log('✅ Connected to Supabase PostgreSQL database for Mock Test 3');
      // Ensure table exists
      const createTableSQL = `
      CREATE TABLE IF NOT EXISTS mock_test_3_results (
        id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_name        TEXT NOT NULL,
        exam_name        TEXT,
        mock_test        TEXT,
        attempt_number   INTEGER,
        score            NUMERIC NOT NULL,
        percentage       NUMERIC NOT NULL,
        result           TEXT,
        total_marks      NUMERIC,
        total_questions  INTEGER,
        correct_answers  INTEGER,
        time_taken       INTEGER,
        time_remaining   INTEGER,
        submission_type  TEXT,
        created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
      `;
      client.query(createTableSQL).then(() => {
          console.log('✅ mock_test_3_results table is ready');
          release();
      }).catch((e) => {
          console.error('❌ Table creation failed', e.message);
          release();
      });
    }
  });
}

export default activePool;
