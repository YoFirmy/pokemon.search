import axios from 'axios';

import pokemonDetailsParser from 'services/pokemonApi/pokemonDetails/pokemonDetailsParser';

const getPokemonDetails = async (pokemonName: string) => {
  const result = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .catch((error) => console.error('Error calling pokemon details api:', error));

  return result?.data ? pokemonDetailsParser(result.data) : null;
};

export default getPokemonDetails;
