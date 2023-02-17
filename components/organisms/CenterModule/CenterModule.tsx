import styled from '@emotion/styled';

import Dropdown from 'components/atoms/Dropdown/Dropdown';
import mockDropdownProps from 'components/atoms/Dropdown/Dropdown.mocks';

const Container = styled.section(({ theme }) => ({
  padding: '20px',
  borderStyle: 'double',
  borderWidth: '8px',
  borderColor: theme.colors.brown,
  borderRadius: '16px',
}));

const CenterModule: React.FC = () => {
  return (
    <Container>
      <Dropdown items={mockDropdownProps.base.items} />
    </Container>
  );
};

export default CenterModule;
