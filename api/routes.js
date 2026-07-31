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
            // User Login
            let userRes = await pool.query('SELECT * FROM mock_test_3_users WHERE username = $1 AND role = $2', [cleanName, 'user']);
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

// Helper to check if user has attempted main mode
async function hasCompletedMainAttempt(userName, mockTest) {
    try {
        const res = await pool.query(
            "SELECT * FROM mock_test_3_results WHERE user_name = $1 AND (mock_test = $2 OR mock_test = 'da_mock3' OR mock_test = 'mock_test_3') AND exam_mode = 'main' LIMIT 1",
            [userName, mockTest || 'da_mock3']
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

        // Enforce 1-attempt limit if global mode is Main Mode
        if (globalMode === 'main') {
            const existingAttempt = await hasCompletedMainAttempt(userName, mockTest);
            if (existingAttempt) {
                return res.status(403).json({
                    success: false,
                    message: 'Main Mode allows only ONE attempt per student. You have already completed this exam.'
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
            (user_name, exam_name, mock_test, exam_mode, attempt_number, score, percentage, result, 
             total_marks, total_questions, correct_answers, incorrect_answers, not_attended,
             time_taken, time_allowed, time_remaining, submission_type, answers, completion_status) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
            RETURNING *`,
            [
                userName,
                exam_name || 'Python Mastery',
                mockTest,
                globalMode,
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

