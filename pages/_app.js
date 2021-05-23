import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from 'components/ui/theme';
import { CssBaseline } from 'components/ui/CssBaseline';
import { compose } from 'helpers/compose';
import { withSavedCities } from 'hocs/withSavedCities';
import { withHydrate } from 'effector-next';
import 'Api';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Lexend Deca', Roboto, sans-serif;
  }
  
  button {
    font-family: 'Lexend Deca', Roboto, sans-serif;
  }

  * {
    outline: none;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  return { pageProps };
};

export default compose(
  withHydrate(),
  withSavedCities,
)(MyApp);
