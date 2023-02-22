import styled from '@emotion/styled';
import Head from 'next/head';

export interface PrimaryLayoutProps {
  children?: React.ReactNode;
}

const Container = styled.main(({ theme }) => ({
  minHeight: '100vh',
  minWidth: '100%',
  padding: '20px',
  backgroundColor: theme.colors.seaFoam,
  display: 'flex',
  justifyContent: 'center',

  [theme.mediaQuery.tablet]: {
    padding: '32px',
  },

  [theme.mediaQuery.laptop]: {
    padding: '40px',
  },
}));

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <html lang="en-GB" />
      </Head>
      <Container>{children}</Container>
    </>
  );
};

export default PrimaryLayout;
