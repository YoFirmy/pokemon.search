// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import getPokemonList from 'services/pokemonApi/pokemonList/getPokemonList';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await getPokemonList().then((data) => res.status(200).json(data));
};

export default handler;
