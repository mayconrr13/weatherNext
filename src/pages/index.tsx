import React, { useContext } from 'react';
import Link from 'next/link';

import { WeatherContext } from '../context/WeatherContext';

import { Container, Footer, Loading, Error } from '../styles/pages/Home';

import CurrentWeather from '../components/CurrentWeather';
import FormBox from '../components/FormBox';
import DailyForecast from '../components/DailyForecast';

export default function Home() {
  const { error, weatherInfo, loading } = useContext(WeatherContext);

  return (
    <Container>
      <FormBox />

      {!loading && weatherInfo && (
        <>
          <CurrentWeather />
          <DailyForecast />
        </>
      )}

      {error && (
        <Error>
          <h3>{error}</h3>
        </Error>
      )}

      {loading && (
        <Loading>
          <div />
        </Loading>
      )}

      <Footer>
        <p>
          Developed by{' '}
          <strong>
            <Link href="https://github.com/mayconrr13">Maycon</Link>
          </strong>
        </p>
      </Footer>
    </Container>
  );
}
