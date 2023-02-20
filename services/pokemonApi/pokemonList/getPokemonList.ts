import axios from 'axios';

import pokemonListParser from './pokemonListParser';

const getPokemonList = async () => {
  const result = await axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=1279')
    .catch((error) => console.error('Error calling pokemon list api:', error));

  return result?.data ? pokemonListParser(result.data) : null;
};

export default getPokemonList;
