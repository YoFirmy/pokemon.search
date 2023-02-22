import styled from '@emotion/styled';
import Image from 'next/image';

const Container = styled.div({
  padding: '60px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',

  '> p': {
    textAlign: 'center',
  },
});

const ImageNotFound: React.FC = () => (
  <Container>
    <Image src="/prof_oak.png" alt="prof oak" width="163" height="299" />
    <p>pokemon image not found...</p>
  </Container>
);

export default ImageNotFound;
