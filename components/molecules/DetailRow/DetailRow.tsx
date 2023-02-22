import styled from '@emotion/styled';

export interface DetailRowProps {
  label: string;
  value: string | number;
}

const Container = styled.div({
  display: 'flex',
});

const StyledP = styled.p({
  flex: 1,
});

const DetailRow: React.FC<DetailRowProps> = ({ label, value }) => {
  return (
    <Container>
      <StyledP>{label}:</StyledP>
      <StyledP>{value}</StyledP>
    </Container>
  );
};

export default DetailRow;
