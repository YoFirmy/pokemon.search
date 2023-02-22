import styled from '@emotion/styled';

import capitalise from 'utils/capitalise';

export interface DetailListRowProps {
  label: string;
  values: string[];
}

const Container = styled.div({
  display: 'flex',

  p: {
    flex: 1,
  },
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

const DetailListRow: React.FC<DetailListRowProps> = ({ label, values }) => (
  <Container>
    <p>{label}:</p>
    <DetailValueList>
      {values.map((value, index) => (
        <li key={`${value}-${index}`}>{capitalise(value)}</li>
      ))}
    </DetailValueList>
  </Container>
);

export default DetailListRow;
