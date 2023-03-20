import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { NextPageWithLayout } from 'pages/page';

import DetailsLayout from 'components/layouts/DetailsLayout/DetailsLayout';
import PrimaryLayout from 'components/layouts/PrimaryLayout/PrimaryLayout';

import getPokemonDetails from 'services/pokemonApi/pokemonDetails/getPokemonDetails';
import { PokemonDetails } from 'services/pokemonApi/pokemonDetails/pokemonDetailsParser';

import capitalise from 'utils/capitalise';

interface DetailsProps {
  pokemon: PokemonDetails;
}

const Details: NextPageWithLayout<DetailsProps> = ({ pokemon }) => (
  <>
    <Head>
      <title>{capitalise(pokemon.name)} details | Pokemon search</title>
      {/* <meta
        name="description"
        content={`This page displays some details about the pokemon ${pokemon.name}`}
      /> */}
    </Head>
    <DetailsLayout pokemon={pokemon} />
  </>
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
