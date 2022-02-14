const fetch = require('node-fetch');

(async () => {
    const pokemonId = process.argv[2];
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonId);
    const pokemon = await response.json();

    console.log(pokemon.name);
    console.log(pokemon.sprites.front_default);
})();
