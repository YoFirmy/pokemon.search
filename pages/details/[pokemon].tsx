import { GetServerSideProps } from 'next';

import { NextPageWithLayout } from 'pages/page';

import DetailsLayout from 'components/layouts/DetailsLayout/DetailsLayout';
import PrimaryLayout from 'components/layouts/PrimaryLayout/PrimaryLayout';

import getPokemonDetails from 'services/pokemonApi/pokemonDetails/getPokemonDetails';
import { PokemonDetails } from 'services/pokemonApi/pokemonDetails/pokemonDetailsParser';

interface DetailsProps {
  pokemon: PokemonDetails;
}

const Details: NextPageWithLayout<DetailsProps> = ({ pokemon }) => (
  <DetailsLayout pokemon={pokemon} />
);

export default Details;

Details.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const pokemon = await getPokemonDetails(ctx.query.pokemon as string);

  return {
    notFound: !pokemon,
    props: {
      pokemon,
    },
  };
};
