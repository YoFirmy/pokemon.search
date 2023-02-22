import styled from '@emotion/styled';
import Image from 'next/image';

import ImageNotFound from 'components/atoms/ImageNotFound/ImageNotFound';
import DetailListRow from 'components/molecules/DetailListRow/DetailListRow';
import DetailRow from 'components/molecules/DetailRow/DetailRow';

import { PokemonDetails } from 'services/pokemonApi/pokemonDetails/pokemonDetailsParser';

import capitalise from 'utils/capitalise';

export interface DetailsLayoutProps {
  pokemon: PokemonDetails;
}

const Container = styled.div({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '40px',
});

const LeftSideWrapper = styled.div({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
});

const RightSideWrapper = styled.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '80px',
  gap: '32px',
});

const Title = styled.h1({
  paddingBottom: '32px',
});

const DetailsLayout: React.FC<DetailsLayoutProps> = ({ pokemon }) => (
  <Container>
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
