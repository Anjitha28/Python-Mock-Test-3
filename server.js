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
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// API routes
app.use('/api', apiRoutes);

// Fallback to serve static files / index.html
app.get('/{*path}', (req, res) => {
    const requestedPath = path.join(publicPath, req.path);
    res.sendFile(requestedPath, (err) => {
        if (err) {
            res.sendFile(path.join(publicPath, 'index.html'));
        }
    });
});

export default app;

if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`🚀 Python Mastery Mock Test 3 running on http://localhost:${PORT}`);
    });
}
