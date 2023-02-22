import styled from '@emotion/styled';
import Image from 'next/image';

import ImageNotFound from 'components/atoms/ImageNotFound/ImageNotFound';
import NextLink from 'components/atoms/NextLink/NextLink';
import DetailListRow from 'components/molecules/DetailListRow/DetailListRow';
import DetailRow from 'components/molecules/DetailRow/DetailRow';

import { PokemonDetails } from 'services/pokemonApi/pokemonDetails/pokemonDetailsParser';

import capitalise from 'utils/capitalise';

export interface DetailsLayoutProps {
  pokemon: PokemonDetails;
}

const Container = styled.div(({ theme }) => ({
  position: 'relative',
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  maxWidth: '1600px',

  [theme.mediaQuery.tablet]: {
    paddingTop: '40px',
    flexDirection: 'row',
  },
}));

const LeftSideWrapper = styled.div({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
});

const RightSideWrapper = styled.div(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',

  [theme.mediaQuery.tablet]: {
    paddingTop: '80px',
  },
}));

const Title = styled.h1(({ theme }) => ({
  paddingBottom: '32px',
  fontSize: theme.fontSizes[26],
  textAlign: 'center',

  [theme.mediaQuery.tablet]: {
    fontSize: theme.fontSizes[32],
  },
}));

const HomeLinkWrapper = styled.div({
  position: 'absolute',
  top: '0px',
  left: '0px',
});

const DetailsLayout: React.FC<DetailsLayoutProps> = ({ pokemon }) => (
  <Container>
    <HomeLinkWrapper>
      <NextLink href="/">New Search</NextLink>
    </HomeLinkWrapper>
    <LeftSideWrapper>
      {pokemon.image ? (
        <Image src={pokemon.image} alt={pokemon.name} width="300" height="300" />
      ) : (
        <ImageNotFound />
      )}
    </LeftSideWrapper>
    <RightSideWrapper>
      <Title>{capitalise(pokemon.name)} Details</Title>
      <DetailRow label="Game index" value={pokemon.gameIndex} />
      <DetailRow label="Height" value={`${pokemon.height * 10}cm`} />
      <DetailRow label="Weight" value={`${pokemon.weight / 10}kg`} />
      <DetailListRow label="Types" values={pokemon.types} />
      <DetailListRow label="Moves" values={pokemon.moves} />
    </RightSideWrapper>
  </Container>
);

export default DetailsLayout;
