/**
 * This file contains all the routes for the API
 * @module /paths
 * 
 */
// import express and jokeApi
import express from 'express';
import { getJoke } from './jokeApi.js';

// Create a router
const router = express.Router();

// Define the routes
router.get('/', (req, res) => {
    res.send({ message: 'Hello World!' });
});

// Define the route to get programming jokes
router.get('/readProgrammingJokes', async (req, res) => {
    // log the route hit
    console.log('readProgrammingJokes route hit');

    // get the number of jokes from the query
    const { numJokes } = req.query;
    // console.log(numJokes);
    try {
        // get the jokes from the jokeApi
        const jokes = await getJoke({amount: numJokes});
        // send the jokes as response
        res.send(jokes);
    } catch (error) {
        // log the error
        console.error(error);
        // send the error as response
        res.status(500).send({ message: 'Server Error' });
    }

});

// Export the router
export default router;