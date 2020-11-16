const getRandomJoke = (endpoint) => {
    const API_URL = `https://icanhazdadjoke.com${endpoint}`;
    const options = {
        method: "GET",
        headers: { "Accept": "application/json" } // fixes “No Access-Control-Allow-Origin header”
    };
    fetch(API_URL, options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => {
            console.log(error);
        });
}
getRandomJoke('');


// Requirements:

// Als gebruiker wil ik bij het landen op de pagina uitgenodigd worden om op een knop te klikken.
// Als gebruiker wil ik na het klikken op de knop 1 grap, tweet of pokemon te zien krijgen.
// Bekijk nog minstens 1 andere feature van de API en zorg dat jouw gebruiker hier gebruik van kan maken (wees creatief!) :).
// Bijvoorbeeld: DadJokes API kan ook plaatjes van dadjokes ophalen ipv tekst.
// PokemonAPI: kan ook de strengths en weaknesses van de pokemon tonen.