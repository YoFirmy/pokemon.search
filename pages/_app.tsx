import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

import { NextPageWithLayout } from 'pages/page';

import { globals } from 'styles/globals';
import theme from 'styles/theme';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globals} />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default App;
