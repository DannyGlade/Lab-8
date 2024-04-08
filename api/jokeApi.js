const _jokeApi = "https://v2.jokeapi.dev/"

function JokeUrl(params) {
    const category = params.category ?? ['Any'];
    const type = params.type ?? ['twopart'];
    const blacklistFlags = params.blacklistFlags ?? ['nsfw', 'religious', 'political', 'racist', 'sexist'];
    const lang = params.lang ?? 'en';
    const amount = params.amount ?? 5;
    return `${_jokeApi}joke/${category ?? ''}?type=${type}&blacklistFlags=${blacklistFlags}&lang=${lang}&amount=${amount}`;
}

function Joke (response) {
    this.id = response.id;
    this.setup = response.setup;
    this.delivery = response.delivery;
}

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
        throw error;
    }
}

export { getJoke };