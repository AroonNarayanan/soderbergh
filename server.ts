import express from 'express';
import { Routes } from './src/routes';
import mongoose from 'mongoose';
import { DB_URL } from './src/constants';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect(DB_URL, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected')).catch(err => console.error(err));

app.use('/api', Routes);

const server = app.listen(process.env.PORT || 80, () => {
    // @ts-ignore
    console.log(`Server available on port ${server.address().port}`);
});
module.exports = server;