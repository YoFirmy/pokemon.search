import styled from '@emotion/styled';

export interface PrimaryLayoutProps {
  children?: React.ReactNode;
}

const Container = styled.main(({ theme }) => ({
  minHeight: '100vh',
  minWidth: '100vw',
  padding: '20px',
  backgroundColor: theme.colors.seaFoam,
  display: 'flex',
  flexDirection: 'column',

  [theme.mediaQuery.tablet]: {
    padding: '32px',
  },

  [theme.mediaQuery.laptop]: {
    padding: '40px',
  },
}));

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PrimaryLayout;
