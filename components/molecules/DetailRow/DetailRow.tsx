import styled from '@emotion/styled';

export interface DetailRowProps {
  label: string;
  value: string | number;
}

const Container = styled.div({
  display: 'flex',

  p: {
    flex: 1,
  },
});

const DetailRow: React.FC<DetailRowProps> = ({ label, value }) => (
  <Container>
    <p>{label}:</p>
    <p>{value}</p>
  </Container>
);

export default DetailRow;
