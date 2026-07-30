import express from 'express';
import pool from './database.js';

const router = express.Router();

// The original frontend uses JSONP (script.src) to bypass CORS and passes 'callback'.
// We need to return JSONP if a callback is provided.
const sendJSONP = (res, callback, data) => {
    if (callback) {
        res.type('text/javascript');
        res.send(`${callback}(${JSON.stringify(data)});`);
    } else {
        res.json(data);
    }
};

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
                submission_type, correct_answers, time_remaining, 
                total_marks, total_questions, result: passFailRes 
            } = req.query;

            const finalScore = score || mark || 0;
            const percentage = maxMark > 0 ? (finalScore / maxMark) * 100 : 0;
            const userName = name || 'Unknown';
            const mockTest = moduleID || 'mock_test_3';
            
            // Get attempt number
            const attemptRes = await pool.query(
                'SELECT MAX(attempt_number) as max_attempt FROM mock_test_3_results WHERE user_name = $1 AND mock_test = $2',
                [userName, mockTest]
            );
            const attemptNum = (attemptRes.rows[0].max_attempt || 0) + 1;

            const timeTaken = 600 - (parseInt(time_remaining) || 0); // Assuming 10 mins

            await pool.query(
                `INSERT INTO mock_test_3_results 
                (user_name, exam_name, mock_test, attempt_number, score, percentage, result, 
                 total_marks, total_questions, correct_answers, time_taken, time_remaining, submission_type) 
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
                [
                    userName, 
                    'Python Mastery', 
                    mockTest, 
                    attemptNum, 
                    finalScore, 
                    percentage, 
                    passFailRes || (percentage >= 84 ? 'PASS' : 'FAIL'),
                    total_marks || maxMark,
                    total_questions || 40,
                    correct_answers || 0,
                    timeTaken,
                    time_remaining || 0,
                    submission_type || 'manual'
                ]
            );
            return sendJSONP(res, callback, { result: "success" });
        }
        
        // Default catch-all
        sendJSONP(res, callback, { result: "success" });
    } catch (e) {
        console.error('Error in API:', e);
        sendJSONP(res, callback, { result: "error", message: e.message });
    }
});

export default router;
