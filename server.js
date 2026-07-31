import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import apiRoutes from './api/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Use API routes
app.use('/api', apiRoutes);

// Fallback route to serve static files / index.html
app.get('*', (req, res) => {
    const requestedPath = path.join(__dirname, 'public', req.path);
    res.sendFile(requestedPath, (err) => {
        if (err) {
            res.sendFile(path.join(__dirname, 'public', 'index.html'));
        }
    });
});

export default app;

if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`🚀 Python Mastery Mock Test 3 running on http://localhost:${PORT}`);
    });
}
