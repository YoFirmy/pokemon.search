interface RawPokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  moves: { move: { name: string } }[];
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  types: { type: { name: string } }[];
}

export interface PokemonDetails {
  name: string;
  gameIndex: number;
  height: number;
  weight: number;
  moves: string[];
  types: string[];
  image: string | null;
}

const pokemonDetailsParser = (data: RawPokemonDetails | 'Not Found'): PokemonDetails | null => {
  if (data === 'Not Found') return null;

  return {
    name: data.name,
    gameIndex: data.id,
    height: data.height,
    weight: data.weight,
    moves: data.moves.map(({ move }) => move.name),
    types: data.types.map(({ type }) => type.name),
    image:
      data.sprites.front_default ||
      data.sprites.front_female ||
      data.sprites.front_shiny ||
      data.sprites.front_shiny_female ||
      data.sprites.back_default ||
      data.sprites.back_female ||
      data.sprites.back_shiny ||
      data.sprites.back_shiny_female,
  };
};

export default pokemonDetailsParser;
