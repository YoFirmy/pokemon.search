import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

import { globals } from 'styles/globals';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globals} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
