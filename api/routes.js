import express from 'express';
import pool from './database.js';
import { hashPassword, verifyPassword, createSession, getSessionUser, deleteSession } from './authUtils.js';

const router = express.Router();

// Helper to extract bearer token from req
const getTokenFromReq = (req) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        return authHeader.split(' ')[1];
    }
    return req.query.token || req.body.token || null;
};

// The original frontend uses JSONP (script.src) to bypass CORS and passes 'callback'.
const sendJSONP = (res, callback, data) => {
    if (callback) {
        res.type('text/javascript');
        res.send(`${callback}(${JSON.stringify(data)});`);
    } else {
        res.json(data);
    }
};

// =========================================================================
// AUTHENTICATION ROUTES
// =========================================================================

// POST /api/auth/verify-phone
router.post('/auth/verify-phone', async (req, res) => {
    try {
        const { phone } = req.body;
        const cleanPhone = (phone || '').trim();

        const phoneRegex = /^\+?[0-9\s\-()]{7,15}$/;
        if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
            return res.status(400).json({ success: false, message: 'Please enter a valid phone number.' });
        }

        const regRes = await pool.query(
            'SELECT id, status FROM mock_test_3_registered_system_users WHERE phone = $1',
            [cleanPhone]
        );

        if (regRes.rows.length === 0) {
            return res.status(400).json({
                success: false,
                code: 'UNREGISTERED_PHONE',
                message: 'This phone number is not registered in the system. Please contact the administrator.'
            });
        }

        if (regRes.rows[0].status === 'Inactive') {
            return res.status(400).json({
                success: false,
                code: 'INACTIVE_PHONE',
                message: 'This phone number is currently inactive. Please contact the administrator.'
            });
        }

        return res.json({
            success: true,
            message: 'Phone number verified successfully.'
        });
    } catch (e) {
        return res.status(500).json({ success: false, message: e.message });
    }
});

// POST /api/auth/signup
router.post('/auth/signup', async (req, res) => {
    try {
        const { name, phone, email, username, password, confirmPassword } = req.body;
        const cleanName = (name || '').trim();
        const cleanPhone = (phone || '').trim();
        const cleanEmail = (email || '').trim().toLowerCase();
        const cleanUsername = (username || '').trim();
        const cleanPassword = password || '';
        const cleanConfirm = confirmPassword || '';

        // 1. FIRST check Phone Number eligibility against Registered System Users
        const phoneRegex = /^\+?[0-9\s\-()]{7,15}$/;
        if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
            return res.status(400).json({ success: false, message: 'Please enter a valid phone number.' });
        }

        const regRes = await pool.query(
            'SELECT id, status FROM mock_test_3_registered_system_users WHERE phone = $1',
            [cleanPhone]
        );

        if (regRes.rows.length === 0) {
            return res.status(400).json({
                success: false,
                code: 'UNREGISTERED_PHONE',
                message: 'This phone number is not registered in the system. Please contact the administrator.'
            });
        }

        if (regRes.rows[0].status === 'Inactive') {
            return res.status(400).json({
                success: false,
                code: 'INACTIVE_PHONE',
                message: 'This phone number is currently inactive. Please contact the administrator.'
            });
        }

        const registeredSystemUserId = regRes.rows[0].id;

        // 2. Validate remaining fields
        if (!cleanName) {
            return res.status(400).json({ success: false, message: 'Please enter your full name.' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!cleanEmail || !emailRegex.test(cleanEmail)) {
            return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
        }

        if (!cleanUsername) {
            return res.status(400).json({ success: false, message: 'Please enter a User ID / Username.' });
        }

        if (!cleanPassword || cleanPassword.length < 4) {
            return res.status(400).json({ success: false, message: 'Please enter a valid password.' });
        }

        if (cleanPassword !== cleanConfirm) {
            return res.status(400).json({ success: false, message: 'Passwords do not match.' });
        }

        // Duplicate Username Check (case-insensitive)
        const checkUserRes = await pool.query(
            'SELECT id FROM mock_test_3_users WHERE LOWER(username) = LOWER($1)',
            [cleanUsername]
        );
        if (checkUserRes.rows.length > 0) {
            return res.status(400).json({ success: false, message: 'User ID is already taken.' });
        }

        // Duplicate Email Check (case-insensitive)
        const checkEmailRes = await pool.query(
            'SELECT id FROM mock_test_3_users WHERE LOWER(email) = LOWER($1)',
            [cleanEmail]
        );
        if (checkEmailRes.rows.length > 0) {
            return res.status(400).json({ success: false, message: 'Email address is already registered.' });
        }

        // Duplicate Phone Check in mock_test_3_users
        const checkPhoneRes = await pool.query(
            'SELECT id FROM mock_test_3_users WHERE phone = $1',
            [cleanPhone]
        );
        if (checkPhoneRes.rows.length > 0) {
            return res.status(400).json({ success: false, message: 'This phone number has already been used to create an account.' });
        }

        // Hash password securely using existing PBKDF2 salt:hash mechanism
        const passwordHash = hashPassword(cleanPassword);

        // Insert new user record with role 'user', is_first_login = false, and registered_system_user_id link
        await pool.query(
            `INSERT INTO mock_test_3_users (username, name, phone, email, password_hash, role, is_first_login, registered_system_user_id)
             VALUES ($1, $2, $3, $4, $5, 'user', false, $6)`,
            [cleanUsername, cleanName, cleanPhone, cleanEmail, passwordHash, registeredSystemUserId]
        );

        return res.status(201).json({
            success: true,
            message: 'Account created successfully. Please login with your User ID and Password.'
        });
    } catch (e) {
        console.error('Error in /api/auth/signup:', e);
        return res.status(500).json({ success: false, message: 'Server error during sign up: ' + e.message });
    }
});

// POST /api/auth/login
router.post('/auth/login', async (req, res) => {
    try {
        const { username, password, loginType } = req.body;
        const cleanName = (username || '').trim();
        const cleanPass = password || '';

        if (!cleanName || !cleanPass) {
            return res.status(400).json({ success: false, message: 'ID/Name and password are required.' });
        }

        if (loginType === 'admin') {
            const adminRes = await pool.query('SELECT * FROM mock_test_3_users WHERE username = $1 AND role = $2', [cleanName, 'admin']);
            if (adminRes.rows.length === 0) {
                return res.status(401).json({ success: false, message: 'Invalid Admin ID or Password.' });
            }
            const admin = adminRes.rows[0];
            const isValid = verifyPassword(cleanPass, admin.password_hash);
            if (!isValid) {
                return res.status(401).json({ success: false, message: 'Invalid Admin ID or Password.' });
            }

            const token = await createSession(admin.id, admin.username, 'admin');
            return res.json({
                success: true,
                token,
                user: { id: admin.id, username: admin.username, role: 'admin', is_first_login: false }
            });
        } else {
            // User Login (matches username or email)
            let userRes = await pool.query(
                'SELECT * FROM mock_test_3_users WHERE (LOWER(username) = LOWER($1) OR LOWER(email) = LOWER($1)) AND role = $2',
                [cleanName, 'user']
            );
            let user = userRes.rows[0];

            if (!user) {
                // If new user and attempting login with default password 'password'
                if (cleanPass === 'password') {
                    const defaultHash = hashPassword('password');
                    const newInsert = await pool.query(
                        `INSERT INTO mock_test_3_users (username, password_hash, role, is_first_login) VALUES ($1, $2, $3, $4) RETURNING *`,
                        [cleanName, defaultHash, 'user', true]
                    );
                    user = newInsert.rows[0];
                } else {
                    return res.status(401).json({ success: false, message: 'Invalid User ID or Password.' });
                }
            } else {
                // Verify existing user password
                const isValid = verifyPassword(cleanPass, user.password_hash);
                if (!isValid) {
                    return res.status(401).json({ success: false, message: 'Invalid User ID or Password.' });
                }
            }

            const token = await createSession(user.id, user.username, 'user');
            return res.json({
                success: true,
                token,
                user: { id: user.id, username: user.username, role: 'user', is_first_login: user.is_first_login }
            });
        }
    } catch (e) {
        console.error('Error in /api/auth/login:', e);
        res.status(500).json({ success: false, message: 'Server error during login: ' + e.message });
    }
});

// POST /api/auth/change-password
router.post('/auth/change-password', async (req, res) => {
    try {
        const token = getTokenFromReq(req);
        const sessionUser = await getSessionUser(token);
        if (!sessionUser) {
            return res.status(401).json({ success: false, message: 'Unauthorized session.' });
        }

        const { newPassword, confirmPassword } = req.body;
        if (!newPassword || newPassword.trim() === '') {
            return res.status(400).json({ success: false, message: 'New password cannot be empty.' });
        }
        if (newPassword !== confirmPassword) {
            return res.status(400).json({ success: false, message: 'New password and Confirm password do not match.' });
        }
        if (newPassword === 'password') {
            return res.status(400).json({ success: false, message: 'New password must be different from the default password.' });
        }

        const newHash = hashPassword(newPassword);
        await pool.query(
            'UPDATE mock_test_3_users SET password_hash = $1, is_first_login = false, updated_at = NOW() WHERE id = $2',
            [newHash, sessionUser.user_id]
        );

        return res.json({ success: true, message: 'Password changed successfully.' });
    } catch (e) {
        console.error('Error in /api/auth/change-password:', e);
        res.status(500).json({ success: false, message: 'Server error changing password: ' + e.message });
    }
});

// GET /api/auth/me
router.get('/auth/me', async (req, res) => {
    try {
        const token = getTokenFromReq(req);
        const sessionUser = await getSessionUser(token);
        if (!sessionUser) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }
        return res.json({ success: true, user: sessionUser });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
});

// POST /api/auth/logout
router.post('/auth/logout', async (req, res) => {
    try {
        const token = getTokenFromReq(req);
        await deleteSession(token);
        return res.json({ success: true, message: 'Logged out successfully.' });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
});

// Helper to get global exam mode
async function getGlobalExamMode() {
    try {
        const res = await pool.query("SELECT value FROM mock_test_3_settings WHERE key = 'exam_mode'");
        if (res.rows.length > 0) return res.rows[0].value;
    } catch (e) {
        console.error('Error fetching global exam_mode setting:', e);
    }
    return 'practice';
}

// Helper to get active main session ID
async function getActiveMainSessionId() {
    try {
        const res = await pool.query("SELECT id FROM mock_test_3_main_sessions WHERE status = 'active' ORDER BY created_at DESC LIMIT 1");
        if (res.rows.length > 0) {
            return res.rows[0].id;
        }
        return null;
    } catch (e) {
        console.error('Error fetching active main session ID:', e);
        return null;
    }
}

// Helper to check if user has attempted the CURRENT main mode session
async function hasCompletedMainAttempt(userName, mockTest) {
    try {
        const activeSessionId = await getActiveMainSessionId();
        if (!activeSessionId) {
            return null; // No active main session
        }

        const res = await pool.query(
            "SELECT * FROM mock_test_3_results WHERE user_name = $1 AND exam_mode = 'main' AND main_session_id = $2 LIMIT 1",
            [userName, activeSessionId]
        );
        return res.rows.length > 0 ? res.rows[0] : null;
    } catch (e) {
        console.error('Error checking main mode attempt:', e);
        return null;
    }
}

// GET /api/settings/exam-mode
router.get('/settings/exam-mode', async (req, res) => {
    try {
        const mode = await getGlobalExamMode();
        return res.json({ success: true, exam_mode: mode });
    } catch (e) {
        return res.status(500).json({ success: false, message: e.message });
    }
});

// POST /api/settings/exam-mode (Admin Only)
router.post('/settings/exam-mode', async (req, res) => {
    try {
        const token = getTokenFromReq(req);
        const sessionUser = await getSessionUser(token);
        const role = (sessionUser?.role || '').toLowerCase().trim();
        if (!sessionUser || role !== 'admin') {
            return res.status(403).json({ success: false, message: 'Forbidden: Admin access required.' });
        }

        const { exam_mode } = req.body;
        if (exam_mode !== 'practice' && exam_mode !== 'main') {
            return res.status(400).json({ success: false, message: 'Invalid exam_mode. Must be practice or main.' });
        }

        const currentMode = await getGlobalExamMode();

        if (exam_mode === 'main') {
            let activeSessionId = await getActiveMainSessionId();
            if (!activeSessionId || currentMode !== 'main') {
                // Close previous active sessions
                await pool.query("UPDATE mock_test_3_main_sessions SET status = 'closed', closed_at = NOW() WHERE status = 'active'");

                // Create a NEW Main Exam session
                const newSessionRes = await pool.query("INSERT INTO mock_test_3_main_sessions (status) VALUES ('active') RETURNING id");
                activeSessionId = newSessionRes.rows[0].id;

                await pool.query(
                    "INSERT INTO mock_test_3_settings (key, value, updated_at) VALUES ('active_main_session_id', $1, NOW()) ON CONFLICT (key) DO UPDATE SET value = $1, updated_at = NOW()",
                    [activeSessionId]
                );
            }
        } else if (exam_mode === 'practice') {
            // Close active main exam session and clear setting
            await pool.query("UPDATE mock_test_3_main_sessions SET status = 'closed', closed_at = NOW() WHERE status = 'active'");
            await pool.query("DELETE FROM mock_test_3_settings WHERE key = 'active_main_session_id'");
        }

        await pool.query(
            "INSERT INTO mock_test_3_settings (key, value, updated_at) VALUES ('exam_mode', $1, NOW()) ON CONFLICT (key) DO UPDATE SET value = $1, updated_at = NOW()",
            [exam_mode]
        );

        return res.json({ success: true, exam_mode, message: `Global exam mode updated to ${exam_mode}.` });
    } catch (e) {
        return res.status(500).json({ success: false, message: e.message });
    }
});

// GET /api/attempts/check
router.get('/attempts/check', async (req, res) => {
    try {
        const username = req.query.username || req.query.name;
        const mockTest = req.query.mock_test || req.query.moduleID || 'da_mock3';

        if (!username) {
            return res.status(400).json({ success: false, message: 'Username is required.' });
        }

        const globalMode = await getGlobalExamMode();
        const mainAttempt = await hasCompletedMainAttempt(username, mockTest);

        return res.json({
            success: true,
            global_exam_mode: globalMode,
            has_attempted_main: !!mainAttempt,
            last_main_attempt: mainAttempt
        });
    } catch (e) {
        return res.status(500).json({ success: false, message: e.message });
    }
});

// GET /api/admin/registered-system-users
router.get('/admin/registered-system-users', async (req, res) => {
    try {
        const token = getTokenFromReq(req);
        const sessionUser = await getSessionUser(token);
        if (!sessionUser || sessionUser.role !== 'admin') {
            return res.status(403).json({ success: false, message: 'Forbidden: Admin access required.' });
        }

        const result = await pool.query(
            `SELECT 
               r.id, 
               r.name, 
               r.phone, 
               r.email, 
               r.college, 
               r.status, 
               CASE 
                 WHEN u.id IS NOT NULL THEN 'Signed Up' 
                 ELSE 'Not Signed Up' 
               END AS signup_status,
               u.id AS application_user_id,
               r.created_at, 
               r.updated_at 
             FROM mock_test_3_registered_system_users r
             LEFT JOIN mock_test_3_users u 
               ON u.registered_system_user_id = r.id 
               OR (u.phone = r.phone AND u.phone IS NOT NULL AND u.phone != '')
               OR (LOWER(u.email) = LOWER(r.email) AND u.email IS NOT NULL AND u.email != '')
             ORDER BY r.created_at DESC`
        );
        return res.json({ success: true, users: result.rows });
    } catch (e) {
        return res.status(500).json({ success: false, message: e.message });
    }
});

// POST /api/admin/registered-system-users (Manual Add User)
router.post('/admin/registered-system-users', async (req, res) => {
    try {
        const token = getTokenFromReq(req);
        const sessionUser = await getSessionUser(token);
        if (!sessionUser || sessionUser.role !== 'admin') {
            return res.status(403).json({ success: false, message: 'Forbidden: Admin access required.' });
        }

        const { name, phone, email, college } = req.body;
        const cleanName = (name || '').trim();
        const cleanPhone = (phone || '').trim();
        const cleanEmail = (email || '').trim().toLowerCase();
        const cleanCollege = (college || '').trim();

        if (!cleanName) return res.status(400).json({ success: false, message: 'Name is required.' });

        const phoneRegex = /^\+?[0-9\s\-()]{7,15}$/;
        if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
            return res.status(400).json({ success: false, message: 'Please enter a valid phone number.' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!cleanEmail || !emailRegex.test(cleanEmail)) {
            return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
        }

        if (!cleanCollege) return res.status(400).json({ success: false, message: 'College Name is required.' });

        // Unique Phone Number Check
        const checkPhone = await pool.query(
            'SELECT id FROM mock_test_3_registered_system_users WHERE phone = $1',
            [cleanPhone]
        );
        if (checkPhone.rows.length > 0) {
            return res.status(400).json({ success: false, message: 'This phone number is already registered.' });
        }

        const insertRes = await pool.query(
            `INSERT INTO mock_test_3_registered_system_users (name, phone, email, college, status, signup_status)
             VALUES ($1, $2, $3, $4, 'Active', 'Not Signed Up')
             RETURNING *`,
            [cleanName, cleanPhone, cleanEmail, cleanCollege]
        );

        return res.status(201).json({ success: true, user: insertRes.rows[0], message: 'Registered user added successfully.' });
    } catch (e) {
        return res.status(500).json({ success: false, message: e.message });
    }
});

// POST /api/admin/registered-system-users/bulk-import
router.post('/admin/registered-system-users/bulk-import', async (req, res) => {
    try {
        const token = getTokenFromReq(req);
        const sessionUser = await getSessionUser(token);
        if (!sessionUser || sessionUser.role !== 'admin') {
            return res.status(403).json({ success: false, message: 'Forbidden: Admin access required.' });
        }

        const { records } = req.body;
        if (!Array.isArray(records) || records.length === 0) {
            return res.status(400).json({ success: false, message: 'No valid records provided for import.' });
        }

        // Get existing phone numbers from DB
        const existingPhonesRes = await pool.query('SELECT phone FROM mock_test_3_registered_system_users');
        const existingPhones = new Set(existingPhonesRes.rows.map(r => r.phone.trim()));

        let importedCount = 0;
        let duplicateCount = 0;
        const seenInBatch = new Set();

        for (const rec of records) {
            const cleanPhone = (rec.phone || '').toString().trim();
            if (existingPhones.has(cleanPhone) || seenInBatch.has(cleanPhone)) {
                duplicateCount++;
                continue;
            }
            seenInBatch.add(cleanPhone);

            await pool.query(
                `INSERT INTO mock_test_3_registered_system_users (name, phone, email, college, status, signup_status)
                 VALUES ($1, $2, $3, $4, 'Active', 'Not Signed Up')`,
                [rec.name.trim(), cleanPhone, rec.email.trim().toLowerCase(), rec.college.trim()]
            );
            importedCount++;
        }

        return res.json({
            success: true,
            importedCount,
            duplicateCount,
            message: `Import completed. Total records processed: ${records.length}. Successfully imported: ${importedCount}. Duplicates skipped: ${duplicateCount}.`
        });
    } catch (e) {
        return res.status(500).json({ success: false, message: e.message });
    }
});

// PUT /api/admin/registered-system-users/:id
router.put('/admin/registered-system-users/:id', async (req, res) => {
    try {
        const token = getTokenFromReq(req);
        const sessionUser = await getSessionUser(token);
        if (!sessionUser || sessionUser.role !== 'admin') {
            return res.status(403).json({ success: false, message: 'Forbidden: Admin access required.' });
        }

        const { id } = req.params;
        const { name, phone, email, college, status } = req.body;

        if (phone) {
            const checkPhone = await pool.query(
                'SELECT id FROM mock_test_3_registered_system_users WHERE phone = $1 AND id != $2',
                [phone.trim(), id]
            );
            if (checkPhone.rows.length > 0) {
                return res.status(400).json({ success: false, message: 'This phone number is already registered.' });
            }
        }

        const updateRes = await pool.query(
            `UPDATE mock_test_3_registered_system_users
             SET name = COALESCE($1, name),
                 phone = COALESCE($2, phone),
                 email = COALESCE($3, email),
                 college = COALESCE($4, college),
                 status = COALESCE($5, status),
                 updated_at = NOW()
             WHERE id = $6
             RETURNING *`,
            [name?.trim(), phone?.trim(), email?.trim().toLowerCase(), college?.trim(), status, id]
        );

        if (updateRes.rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Registered user not found.' });
        }

        return res.json({ success: true, user: updateRes.rows[0] });
    } catch (e) {
        return res.status(500).json({ success: false, message: e.message });
    }
});

// DELETE /api/admin/registered-system-users/:id
router.delete('/admin/registered-system-users/:id', async (req, res) => {
    try {
        const token = getTokenFromReq(req);
        const sessionUser = await getSessionUser(token);
        if (!sessionUser || sessionUser.role !== 'admin') {
            return res.status(403).json({ success: false, message: 'Forbidden: Admin access required.' });
        }

        const { id } = req.params;
        await pool.query('DELETE FROM mock_test_3_registered_system_users WHERE id = $1', [id]);
        return res.json({ success: true, message: 'Registered user deleted successfully.' });
    } catch (e) {
        return res.status(500).json({ success: false, message: e.message });
    }
});

// POST /api/admin/registered-system-users/bulk-delete
router.post('/admin/registered-system-users/bulk-delete', async (req, res) => {
    try {
        const token = getTokenFromReq(req);
        const sessionUser = await getSessionUser(token);
        if (!sessionUser || sessionUser.role !== 'admin') {
            return res.status(403).json({ success: false, message: 'Forbidden: Admin access required.' });
        }

        const { ids } = req.body;
        if (!Array.isArray(ids) || ids.length === 0) {
            return res.status(400).json({ success: false, message: 'No user IDs provided for deletion.' });
        }

        await pool.query('DELETE FROM mock_test_3_registered_system_users WHERE id = ANY($1::uuid[])', [ids]);
        return res.json({ success: true, message: `${ids.length} registered users deleted successfully.` });
    } catch (e) {
        return res.status(500).json({ success: false, message: e.message });
    }
});

// POST /api/admin/registered-system-users/bulk-status
router.post('/admin/registered-system-users/bulk-status', async (req, res) => {
    try {
        const token = getTokenFromReq(req);
        const sessionUser = await getSessionUser(token);
        if (!sessionUser || sessionUser.role !== 'admin') {
            return res.status(403).json({ success: false, message: 'Forbidden: Admin access required.' });
        }

        const { ids, status } = req.body;
        if (!Array.isArray(ids) || ids.length === 0) {
            return res.status(400).json({ success: false, message: 'No user IDs provided for status update.' });
        }

        if (status !== 'Active' && status !== 'Inactive') {
            return res.status(400).json({ success: false, message: 'Invalid status value. Must be Active or Inactive.' });
        }

        await pool.query(
            `UPDATE mock_test_3_registered_system_users
             SET status = $1, updated_at = NOW()
             WHERE id = ANY($2::uuid[])`,
            [status, ids]
        );

        return res.json({ success: true, message: `Status updated to ${status} for ${ids.length} users.` });
    } catch (e) {
        return res.status(500).json({ success: false, message: e.message });
    }
});

// GET /api/admin/users
router.get('/admin/users', async (req, res) => {
    try {
        const token = getTokenFromReq(req);
        const sessionUser = await getSessionUser(token);
        if (!sessionUser || sessionUser.role !== 'admin') {
            return res.status(403).json({ success: false, message: 'Forbidden: Admin access required.' });
        }

        const usersRes = await pool.query('SELECT id, username, role, is_first_login, created_at, updated_at FROM mock_test_3_users ORDER BY created_at DESC');
        return res.json({ success: true, users: usersRes.rows });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
});

// DELETE /api/admin/users/:id (Admin Only)
router.delete('/admin/users/:id', async (req, res) => {
    const client = await pool.connect();
    try {
        const token = getTokenFromReq(req);
        const sessionUser = await getSessionUser(token);
        if (!sessionUser || sessionUser.role !== 'admin') {
            return res.status(403).json({ success: false, message: 'Forbidden: Admin access required.' });
        }

        const userId = req.params.id;

        const targetRes = await client.query('SELECT * FROM mock_test_3_users WHERE id = $1', [userId]);
        if (targetRes.rows.length === 0) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }
        const targetUser = targetRes.rows[0];

        // Safely remove user and all associated exam/attempt data in a transaction
        await client.query('BEGIN');
        await client.query('DELETE FROM mock_test_3_sessions WHERE user_id = $1 OR username = $2', [userId, targetUser.username]);
        await client.query('DELETE FROM mock_test_3_results WHERE user_name = $1', [targetUser.username]);
        await client.query('DELETE FROM mock_test_3_users WHERE id = $1', [userId]);
        await client.query('COMMIT');

        return res.json({
            success: true,
            message: `User '${targetUser.username}' and all associated exam attempt records were permanently deleted.`
        });
    } catch (e) {
        await client.query('ROLLBACK');
        console.error('Error deleting user:', e);
        return res.status(500).json({ success: false, message: e.message });
    } finally {
        client.release();
    }
});

// GET /api/admin/results
router.get('/admin/results', async (req, res) => {
    try {
        const token = getTokenFromReq(req);
        const sessionUser = await getSessionUser(token);
        if (!sessionUser || sessionUser.role !== 'admin') {
            return res.status(403).json({ success: false, message: 'Forbidden: Admin access required.' });
        }

        const resultsRes = await pool.query(
            `SELECT id, user_name, exam_name, mock_test, exam_mode, attempt_number, score, percentage, result,
                    total_marks, total_questions, correct_answers, incorrect_answers, not_attended,
                    time_taken, time_allowed, time_remaining, submission_type, created_at
             FROM mock_test_3_results
             ORDER BY created_at DESC`
        );
        return res.json({ success: true, results: resultsRes.rows });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
});

// GET /api/admin/student-summary
router.get('/admin/student-summary', async (req, res) => {
    try {
        const token = getTokenFromReq(req);
        const sessionUser = await getSessionUser(token);
        if (!sessionUser || sessionUser.role !== 'admin') {
            return res.status(403).json({ success: false, message: 'Forbidden: Admin access required.' });
        }

        const resultsRes = await pool.query(
            `SELECT id, user_name, exam_name, mock_test, exam_mode, attempt_number, score, percentage, result,
                    total_marks, total_questions, correct_answers, incorrect_answers, not_attended,
                    time_taken, time_allowed, time_remaining, submission_type, created_at
             FROM mock_test_3_results
             ORDER BY created_at DESC`
        );

        const allRows = resultsRes.rows;
        const studentMap = new Map();

        for (const row of allRows) {
            const userName = row.user_name;
            if (!studentMap.has(userName)) {
                studentMap.set(userName, {
                    student_name: userName,
                    student_id: userName,
                    most_recent_exam: row.exam_name || row.mock_test || 'Python Mastery - Mock Test 3',
                    last_attempt_date: row.created_at,
                    main_attempts_count: 0,
                    practice_attempts_count: 0,
                    attempts: []
                });
            }

            const student = studentMap.get(userName);
            if (row.exam_mode === 'main') {
                student.main_attempts_count++;
            } else {
                student.practice_attempts_count++;
            }

            const endDate = new Date(row.created_at);
            const timeTakenSec = parseInt(row.time_taken) || 0;
            const startDate = new Date(endDate.getTime() - (timeTakenSec * 1000));

            student.attempts.push({
                ...row,
                start_time: startDate.toISOString(),
                end_time: endDate.toISOString()
            });
        }

        const students = Array.from(studentMap.values());
        students.sort((a, b) => new Date(b.last_attempt_date) - new Date(a.last_attempt_date));

        return res.json({ success: true, students });
    } catch (e) {
        console.error('Error in /api/admin/student-summary:', e);
        res.status(500).json({ success: false, message: e.message });
    }
});

// DELETE /api/admin/student-results/:studentId
router.delete('/admin/student-results/:studentId', async (req, res) => {
    try {
        const token = getTokenFromReq(req);
        const sessionUser = await getSessionUser(token);
        if (!sessionUser || sessionUser.role !== 'admin') {
            return res.status(403).json({ success: false, message: 'Forbidden: Admin access required.' });
        }

        const { studentId } = req.params;
        await pool.query('DELETE FROM mock_test_3_results WHERE user_name = $1', [studentId]);
        return res.json({ success: true, message: 'Student exam records deleted successfully.' });
    } catch (e) {
        return res.status(500).json({ success: false, message: e.message });
    }
});

// POST /api/admin/student-results/bulk-delete
router.post('/admin/student-results/bulk-delete', async (req, res) => {
    try {
        const token = getTokenFromReq(req);
        const sessionUser = await getSessionUser(token);
        if (!sessionUser || sessionUser.role !== 'admin') {
            return res.status(403).json({ success: false, message: 'Forbidden: Admin access required.' });
        }

        const { studentIds } = req.body;
        if (!Array.isArray(studentIds) || studentIds.length === 0) {
            return res.status(400).json({ success: false, message: 'No student IDs provided for deletion.' });
        }

        await pool.query('DELETE FROM mock_test_3_results WHERE user_name = ANY($1::text[])', [studentIds]);
        return res.json({ success: true, message: `${studentIds.length} student exam records deleted successfully.` });
    } catch (e) {
        return res.status(500).json({ success: false, message: e.message });
    }
});

// POST /api/quiz/submit
router.post('/quiz/submit', async (req, res) => {
    try {
        const {
            user_name, exam_name, mock_test, score, percentage, result,
            total_marks, total_questions, correct_answers, incorrect_answers, not_attended,
            time_taken, time_allowed, time_remaining, submission_type, answers
        } = req.body;

        const userName = (user_name || 'Unknown').trim();
        const mockTest = mock_test || 'da_mock3';
        const globalMode = await getGlobalExamMode();

        let activeMainSessionId = null;
        // Enforce 1-attempt limit if global mode is Main Mode
        if (globalMode === 'main') {
            activeMainSessionId = await getActiveMainSessionId();
            const existingAttempt = await hasCompletedMainAttempt(userName, mockTest);
            if (existingAttempt) {
                return res.status(403).json({
                    success: false,
                    message: 'Main Mode allows only ONE attempt per student for this session. You have already completed this exam session.'
                });
            }
        }

        // Get attempt number for this mode
        const attemptRes = await pool.query(
            'SELECT MAX(attempt_number) as max_attempt FROM mock_test_3_results WHERE user_name = $1 AND (mock_test = $2 OR mock_test = \'da_mock3\') AND exam_mode = $3',
            [userName, mockTest, globalMode]
        );
        const attemptNum = (attemptRes.rows[0].max_attempt || 0) + 1;

        const totalQ = parseInt(total_questions) || 40;
        const correctQ = parseInt(correct_answers) || 0;
        const incorrQ = incorrect_answers !== undefined ? parseInt(incorrect_answers) : (totalQ - correctQ);
        const unattQ = parseInt(not_attended) || 0;
        const totalMarksInt = Math.round(parseFloat(total_marks) || 100);
        const calcScoreInt = Math.round(parseFloat(score !== undefined ? score : correctQ));
        const calcPercInt = Math.round(percentage !== undefined ? parseFloat(percentage) : ((calcScoreInt / totalMarksInt) * 100));

        const insertRes = await pool.query(
            `INSERT INTO mock_test_3_results 
            (user_name, exam_name, mock_test, exam_mode, main_session_id, attempt_number, score, percentage, result, 
             total_marks, total_questions, correct_answers, incorrect_answers, not_attended,
             time_taken, time_allowed, time_remaining, submission_type, answers, completion_status) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)
            RETURNING *`,
            [
                userName,
                exam_name || 'Python Mastery',
                mockTest,
                globalMode,
                activeMainSessionId,
                attemptNum,
                calcScoreInt,
                calcPercInt,
                result || (calcPercInt >= 84 ? 'PASS' : 'FAIL'),
                totalMarksInt,
                totalQ,
                correctQ,
                incorrQ,
                unattQ,
                time_taken || 0,
                time_allowed || 600,
                time_remaining || 0,
                submission_type || 'manual',
                JSON.stringify(answers || {}),
                'completed'
            ]
        );

        return res.json({ success: true, result: insertRes.rows[0] });
    } catch (e) {
        console.error('Error in /api/quiz/submit:', e);
        return res.status(500).json({ success: false, message: e.message });
    }
});

// =========================================================================
// EXISTING QUIZ & RESULTS JSONP ROUTES
// =========================================================================

router.get('/', async (req, res) => {
    const { action, callback, phone, name, score, moduleID, module, mark, maxMark } = req.query;

    try {
        if (action === 'login' || action === 'register') {
            return sendJSONP(res, callback, { result: "success", exists: true, name: name || "Test User" });
        }
        
        if (action === 'submitScore' || action === 'logQuiz') {
            if (!process.env.DATABASE_URL) {
                console.warn('⚠️ No database configured, skipping save.');
                return sendJSONP(res, callback, { result: "success", mock: true });
            }

            const { 
                submission_type, correct_answers, incorrect_answers, not_attended,
                time_remaining, time_allowed, total_marks, total_questions, result: passFailRes 
            } = req.query;

            const userName = (name || 'Unknown').trim();
            const mockTest = moduleID || 'da_mock3';
            const globalMode = await getGlobalExamMode();

            // Enforce 1-attempt guard in Main mode
            if (globalMode === 'main') {
                const existingAttempt = await hasCompletedMainAttempt(userName, mockTest);
                if (existingAttempt) {
                    return sendJSONP(res, callback, { result: "error", message: "Main Mode allows only ONE attempt. Exam already completed." });
                }
            }

            const rawScore = parseFloat(score || mark || 0);
            const rawMaxMark = parseFloat(total_marks || maxMark || 100);
            const finalScoreInt = Math.round(rawScore);
            const totalMarksInt = Math.round(rawMaxMark);
            const percentageInt = totalMarksInt > 0 ? Math.round((finalScoreInt / totalMarksInt) * 100) : 0;
            
            const attemptRes = await pool.query(
                'SELECT MAX(attempt_number) as max_attempt FROM mock_test_3_results WHERE user_name = $1 AND (mock_test = $2 OR mock_test = \'da_mock3\') AND exam_mode = $3',
                [userName, mockTest, globalMode]
            );
            const attemptNum = (attemptRes.rows[0].max_attempt || 0) + 1;

            const allowedTime = parseInt(time_allowed) || 600;
            const remainingTime = parseInt(time_remaining) || 0;
            const timeTaken = allowedTime - remainingTime;

            await pool.query(
                `INSERT INTO mock_test_3_results 
                (user_name, exam_name, mock_test, exam_mode, attempt_number, score, percentage, result, 
                 total_marks, total_questions, correct_answers, incorrect_answers, not_attended,
                 time_taken, time_allowed, time_remaining, submission_type, completion_status) 
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)`,
                [
                    userName, 
                    'Python Mastery', 
                    mockTest, 
                    globalMode,
                    attemptNum, 
                    finalScoreInt, 
                    percentageInt, 
                    passFailRes || (percentageInt >= 84 ? 'PASS' : 'FAIL'),
                    totalMarksInt,
                    parseInt(total_questions) || 40,
                    parseInt(correct_answers) || 0,
                    parseInt(incorrect_answers) || 0,
                    parseInt(not_attended) || 0,
                    timeTaken,
                    allowedTime,
                    remainingTime,
                    submission_type || 'manual',
                    'completed'
                ]
            );
            return sendJSONP(res, callback, { result: "success" });
        }
        if (action === 'getHistory') {
            const userName = name || 'Unknown';
            const mockTest = moduleID || 'da_mock3';
            
            if (!process.env.DATABASE_URL) {
                return sendJSONP(res, callback, { result: "success", data: [] });
            }
            
            const historyRes = await pool.query(
                'SELECT attempt_number, exam_mode, score, percentage, result, time_taken, created_at FROM mock_test_3_results WHERE user_name = $1 AND (mock_test = $2 OR mock_test = \'da_mock3\') ORDER BY created_at DESC',
                [userName, mockTest]
            );
            return sendJSONP(res, callback, { result: "success", data: historyRes.rows });
        }
        
        sendJSONP(res, callback, { result: "success" });
    } catch (e) {
        console.error('Error in API:', e);
        sendJSONP(res, callback, { result: "error", message: e.message });
    }
});

export default router;

