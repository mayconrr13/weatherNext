import React from 'react';
import type { AppProps } from 'next/app';

import { WeatherProvider } from '../context/WeatherContext';

import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <WeatherProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </WeatherProvider>
    </>
  );
}

export default MyApp;
