import crypto from 'crypto';
import pool from './database.js';

/**
 * Hashes a plain text password using SHA-512 PBKDF2 with a random 16-byte salt.
 */
export function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
}

/**
 * Verifies a plain text password against a stored salt:hash string.
 */
export function verifyPassword(password, storedHash) {
  if (!storedHash || typeof storedHash !== 'string' || !storedHash.includes(':')) {
    return false;
  }
  const [salt, originalHash] = storedHash.split(':');
  if (!salt || !originalHash) return false;
  
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  try {
    return crypto.timingSafeEqual(Buffer.from(hash, 'hex'), Buffer.from(originalHash, 'hex'));
  } catch (e) {
    return false;
  }
}

/**
 * Generates a random session token.
 */
export function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

/**
 * Creates a new session in the database.
 */
export async function createSession(userId, username, role) {
  const token = generateToken();
  await pool.query(
    'INSERT INTO mock_test_3_sessions (token, user_id, username, role) VALUES ($1, $2, $3, $4)',
    [token, userId, username, role]
  );
  return token;
}

/**
 * Validates a session token and returns the session & user info.
 */
export async function getSessionUser(token) {
  if (!token) return null;
  const res = await pool.query(
    `SELECT s.token, s.user_id, s.username, COALESCE(u.role, s.role) as role, u.is_first_login
     FROM mock_test_3_sessions s
     JOIN mock_test_3_users u ON s.user_id = u.id
     WHERE s.token = $1`,
    [token]
  );
  if (res.rows.length === 0) return null;
  return res.rows[0];
}

/**
 * Deletes a session token from the database.
 */
export async function deleteSession(token) {
  if (!token) return;
  await pool.query('DELETE FROM mock_test_3_sessions WHERE token = $1', [token]);
}
