import styled from '@emotion/styled';

import { NextPageWithLayout } from 'pages/page';

import PrimaryLayout from 'components/layouts/PrimaryLayout/PrimaryLayout';

const PageContainer = styled.div({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Home: NextPageWithLayout = () => (
  <PageContainer>
    <div>
      <h1>Homepage</h1>
      <h2>Sub Title</h2>
      <h3>Sub Title</h3>
      <h4>Sub Title</h4>
      <p>paragraph</p>
    </div>
  </PageContainer>
);

export default Home;

Home.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;
