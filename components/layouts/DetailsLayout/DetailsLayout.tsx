import styled from '@emotion/styled';
import Image from 'next/image';

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

const ImageWrapper = styled.div({
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

const OldDetailRow = styled.div({
  display: 'flex',
});

const StyledP = styled.p({
  flex: 1,
});

const DetailValueList = styled.ul({
  flex: 1,
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

const DetailsLayout: React.FC<DetailsLayoutProps> = ({ pokemon }) => (
  <Container>
    <ImageWrapper>
      {pokemon.image ? (
        <Image src={pokemon.image} alt={pokemon.name} width="300" height="300" />
      ) : (
        <p>pokemon image not found...</p>
      )}
    </ImageWrapper>
    <RightSideWrapper>
      <Title>{capitalise(pokemon.name)} Details</Title>
      <DetailRow label="Game index" value={pokemon.gameIndex} />
      <DetailRow label="Height" value={`${pokemon.height * 10}cm`} />
      <DetailRow label="Weight" value={`${pokemon.weight / 10}kg`} />
      <OldDetailRow>
        <StyledP>Types: </StyledP>
        <DetailValueList>
          {pokemon.types.map((type, index) => (
            <li key={`${type}-${index}`}>{capitalise(type)}</li>
          ))}
        </DetailValueList>
      </OldDetailRow>
      <OldDetailRow>
        <StyledP>Moves: </StyledP>
        <DetailValueList>
          {pokemon.moves.map((move, index) => (
            <li key={`${move}-${index}`}>{capitalise(move)}</li>
          ))}
        </DetailValueList>
      </OldDetailRow>
    </RightSideWrapper>
  </Container>
);

export default DetailsLayout;
