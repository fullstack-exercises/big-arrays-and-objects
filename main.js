const container = document.querySelector('.container');

const fetchData = async(endpoint) => {
    try {
        const API_URL = `https://icanhazdadjoke.com${endpoint}`;
        const options = {
            method: "GET",
            headers: { "Accept": "application/json" } // fixes “No Access-Control-Allow-Origin header”
        };
        let getJoke = await fetch(API_URL, options);
        console.log(getJoke);
        let jokeDiv = document.createElement('div');
        jokeDiv.classList.add('joke');
        container.appendChild(jokeDiv);
        let jokeResults = document.querySelector('.joke');
        return getJoke;

    } catch (error) {
        console.log(error);
    }
}
fetchData('');