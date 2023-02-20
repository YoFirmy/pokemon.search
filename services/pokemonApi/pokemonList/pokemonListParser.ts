const pokemonListParser = (data: { results: { name: string }[] } | 'Not Found') => {
  if (data === 'Not Found') return null;

  return { pokemonList: data.results.map((pokemon) => pokemon.name) };
};

export default pokemonListParser;
