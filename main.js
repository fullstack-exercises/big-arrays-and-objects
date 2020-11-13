const getData = (endpoint) => {
    const API_URL = `https://icanhazdadjoke.com/j/${endpoint}`;
    fetch(API_URL).then(
        function(response) {
            const json = response.json();
            json.then(function(data) {
                console.log(data);
            });
        }
    );
}
getData('R7UfaahVfFd');

// Requirements:

// Als gebruiker wil ik bij het landen op de pagina uitgenodigd worden om op een knop te klikken.
// Als gebruiker wil ik na het klikken op de knop 1 grap, tweet of pokemon te zien krijgen.
// Bekijk nog minstens 1 andere feature van de API en zorg dat jouw gebruiker hier gebruik van kan maken (wees creatief!) :).
// Bijvoorbeeld: DadJokes API kan ook plaatjes van dadjokes ophalen ipv tekst.
// PokemonAPI: kan ook de strengths en weaknesses van de pokemon tonen.