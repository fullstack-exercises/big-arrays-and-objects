const container = document.querySelector('.container');

const getRandomJoke = (endpoint) => {
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
            // console.log(data.joke);
        })
        .catch(error => {
            console.log(error);
        });
}

const createJoke = async() => {
    let getJoke = await getRandomJoke('');
    let jokeDiv = document.createElement('div');
    jokeDiv.classList.add('joke');
    container.appendChild(jokeDiv);

    return getJoke;
}
createJoke();

// Requirements:

// Als gebruiker wil ik bij het landen op de pagina uitgenodigd worden om op een knop te klikken.
// Als gebruiker wil ik na het klikken op de knop 1 grap, tweet of pokemon te zien krijgen.
// Bekijk nog minstens 1 andere feature van de API en zorg dat jouw gebruiker hier gebruik van kan maken (wees creatief!) :).
// Bijvoorbeeld: DadJokes API kan ook plaatjes van dadjokes ophalen ipv tekst.
// PokemonAPI: kan ook de strengths en weaknesses van de pokemon tonen.