// declares the joke api string
const _jokeApi = "https://v2.jokeapi.dev/"

/**
 * JokeUrl function
 * @param {*} params 
 * @returns Joke API URL
 */
function JokeUrl(params) {
    const category = params.category ?? ['Any'];
    const type = params.type ?? ['twopart'];
    const blacklistFlags = params.blacklistFlags ?? ['nsfw', 'religious', 'political', 'racist', 'sexist'];
    const lang = params.lang ?? 'en';
    const amount = params.amount ?? 5;
    return `${_jokeApi}joke/${category ?? ''}?type=${type}&blacklistFlags=${blacklistFlags}&lang=${lang}&amount=${amount}`;
}

/**
 * Joke class
 * @param {*} response 
 */
class Joke {
    constructor(response) {
        this.id = response.id;
        this.setup = response.setup;
        this.delivery = response.delivery;
    }
}

/**
 * getJoke function
 * @param {*} params 
 * @returns {Joke} Jokes
 */
const getJoke = async (params) => {
    const url = JokeUrl(params);
    // console.log(url);

    try {
        const response = await fetch(url);
        // console.log(response);
        const data = await response.json();
        const jokes = data.jokes.map(joke => new Joke(joke));
        // console.log(jokes);
        return jokes;
    } catch (error) {

        // throw error;
        throw error;
    }
}

// Export the getJoke function
export { getJoke };