const container = document.querySelector('.container');
const generateJokeButton = document.querySelector('.button');

const fetchData = (endpoint) => {
    try {
        const API_URL = `https://icanhazdadjoke.com${endpoint}`;
        const options = {
            method: "GET",
            headers: { "Accept": "application/json" } // fixes “No Access-Control-Allow-Origin header”
        };
        fetch(API_URL, options)
            .then(response => response.json())
            .then(data => {
                let jokeResults = document.querySelector('.joke');
                jokeResults.innerHTML = data.joke;
            })

    } catch (error) {
        console.log(error);
    }
}

const fetchRandomJoke = async() => {
    let getJoke = await fetchData('');
    return getJoke;
}
fetchRandomJoke();


generateJokeButton.addEventListener('click', () => {
    fetchRandomJoke();
});