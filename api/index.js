import express from 'express';
import cors from 'cors';
import apiRoutes from './routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount API routes at both /api and root / of serverless handler
app.use('/api', apiRoutes);
app.use('/', apiRoutes);

export default app;
