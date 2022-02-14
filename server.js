const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/:pokemonId', async (req, res) => {
  const pokemonId = req.params.pokemonId;
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonId);
  const pokemon = await response.json();
  res.send(`
    <h3>${pokemon.name}</h3>
    <img src="${pokemon.sprites.front_default}">
  `);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
