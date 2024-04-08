import express from 'express';
import { getJoke } from './jokeApi.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ message: 'Hello World!' });
});

router.get('/readProgrammingJokes', async (req, res) => {
    console.log('readProgrammingJokes route hit');
    const { numJokes } = req.query;
    // console.log(numJokes);
    try {
        const jokes = await getJoke({amount: numJokes});
        res.send(jokes);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server Error' });
    }

});

export default router;