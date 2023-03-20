import styled from '@emotion/styled';
import Head from 'next/head';

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
  <>
    <Head>
      <title>Home | Pokemon Search</title>
      {/* <meta
        name="description"
        content="The site will enable a user to search for a pokemon and view their details"
      /> */}
    </Head>
    <PageContainer>
      <CenterModule />
    </PageContainer>
  </>
);

export default Home;

Home.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;
