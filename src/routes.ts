import express from 'express';
import { createEntry, getAllEntries } from './controller';

const router = express.Router();

router.get('/list', async (req, res) => {
    try {
        res.json(await getAllEntries());
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
});

router.post('/entry', async (req, res) => {
    try {
        res.json(await createEntry(req.body));
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
});

export { router as Routes }