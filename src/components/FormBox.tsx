import React, { FormEvent, useContext } from 'react';
import axios from 'axios';
import { FiSearch } from 'react-icons/fi';
import { WeatherContext } from '../context/WeatherContext';

import { Container } from '../styles/components/FormBox';

const FormBox = () => {
  const {
    city,
    setCity,
    setError,
    weatherInfo,
    setWeatherInfo,
    setLoading,
    setDarkTheme,
  } = useContext(WeatherContext);

  async function handleSubmit(event: FormEvent): Promise<void> {
    setError('');
    setLoading(true);

    event.preventDefault();

    if (!city) {
      setError('Please, type a city name');
      return;
    }

    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${city}&days=7&aqi=no&alerts=no
            `,
      );
      const fetchedData = await response.data;

      setWeatherInfo(fetchedData);
      setLoading(false);
      setDarkTheme(!weatherInfo?.current.is_day);
      setCity('');
    } catch (err) {
      setError('No matching location found');
      setWeatherInfo(null);
      setLoading(false);
      setCity('');
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a city name"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <button type="submit">
        <FiSearch />
      </button>
    </Container>
  );
};

export default FormBox;

export async function getServerSideProps() {
  return {
    props: {
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
    },
  };
}
