import styled from '@emotion/styled';
import useInternalGetter from 'hooks/useInternalGetter';
import { useEffect } from 'react';

import Dropdown from 'components/atoms/Dropdown/Dropdown';

const Container = styled.section(({ theme }) => ({
  padding: '16px',
  borderStyle: 'double',
  borderWidth: '8px',
  borderColor: theme.colors.brown,
  borderRadius: '16px',
}));

const CenterModule: React.FC = () => {
  const { fetchData, data, isLoading } = useInternalGetter('list');

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Dropdown id="pokemon-list-dropdown" items={data?.pokemonList || []} isLoading={isLoading} />
    </Container>
  );
};

export default CenterModule;
