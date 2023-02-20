import styled from '@emotion/styled';

import { NextPageWithLayout } from 'pages/page';

import PrimaryLayout from 'components/layouts/PrimaryLayout/PrimaryLayout';
import CenterModule from 'components/organisms/CenterModule/CenterModule';

const PageContainer = styled.div({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Home: NextPageWithLayout = () => (
  <PageContainer>
    <CenterModule />
  </PageContainer>
);

export default Home;

Home.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;
