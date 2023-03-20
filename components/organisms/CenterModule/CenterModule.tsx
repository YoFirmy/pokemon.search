import styled from '@emotion/styled';
import useInternalGetter from 'hooks/useInternalGetter';
import { useEffect, useState } from 'react';

import Dropdown from 'components/atoms/Dropdown/Dropdown';
import NextLink from 'components/atoms/NextLink/NextLink';

const Container = styled.section(({ theme }) => ({
  padding: '16px',
  borderStyle: 'double',
  borderWidth: '8px',
  borderColor: theme.colors.brown,
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
}));

const CenterModule: React.FC = () => {
  const { fetchData, data, isLoading } = useInternalGetter('list');
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Dropdown
        id="pokemon-list-dropdown"
        items={data?.pokemonList || []}
        onSelectedItemChange={setSelectedPokemon}
        isLoading={isLoading}
      />
      <NextLink href={`/details/${selectedPokemon}`} isDisabled={!selectedPokemon}>
        {selectedPokemon ? `View ${selectedPokemon} details` : 'Make a selection first...'}
      </NextLink>
    </Container>
  );
};

export default CenterModule;
