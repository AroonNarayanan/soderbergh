import express from 'express';

const router = express.Router();

router.get('/list');

router.post('/entry')

export { router as Routes }