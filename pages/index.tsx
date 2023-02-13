import styled from '@emotion/styled';
import type { NextPage } from 'next';

const PageContainer = styled.main(({ theme }) => ({
  backgroundColor: theme.colors.seaFoam,
}));

const Home: NextPage = () => (
  <PageContainer>
    <h1>Homepage</h1>
    <h2>Sub Title</h2>
    <h3>Sub Title</h3>
    <h4>Sub Title</h4>
    <p>paragraph</p>
  </PageContainer>
);

export default Home;
