import styled from '@emotion/styled';
import Image from 'next/image';

import PrimaryLayout from 'components/layouts/PrimaryLayout/PrimaryLayout';

import { NextPageWithLayout } from './page';

const PageContainer = styled.div({
  display: 'flex',
  flex: 1,

  '> div': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    padding: '40px',

    p: {
      textAlign: 'center',
    },
  },
});

const Custom404: NextPageWithLayout = () => (
  <PageContainer>
    <div>
      <h1>Whoops!</h1>
      <p>This page doesn&apos;t exist.</p>
      <p>You might have tried to find a pokemon that doesn&apos;t exist...</p>
    </div>
    <div>
      <Image src="/prof_oak.png" alt="professor oak" height="299" width="163" />
    </div>
  </PageContainer>
);

export default Custom404;

Custom404.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;
