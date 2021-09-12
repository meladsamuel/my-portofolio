import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import {AnimatePresence, useIsPresent} from "framer-motion";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme';

export default function MyApp(props) {
  const { Component, pageProps, router } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const isPresent = useIsPresent();
  React.useEffect(() => {
    !isPresent && console.log("I've been removed!")
  }, [isPresent])
  return (
    <React.Fragment>
      <Head>
        <title>Melad Samuel</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={router.route}/>
        </AnimatePresence>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};