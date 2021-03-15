import React, { useContext } from 'react';
import { FiCloud, FiWind, FiDroplet } from 'react-icons/fi';
import { WeatherContext } from '../context/WeatherContext';

import { getDay, getMonth } from '../utils/handleDateInfo';
import handleWeatherIcons from '../utils/handleWeatherIcons';

import {
  Container,
  Forecast,
  AdditionalInfo,
  UnitButtons,
} from '../styles/components/CurrentWeather';

const CurrentWeather = () => {
  const { weatherInfo, isCelsius, setIsCelsius } = useContext(WeatherContext);

  return (
    <>
      {weatherInfo && (
        <Container>
          <h3>
            {weatherInfo.location.name}, {weatherInfo.location.country}
          </h3>
          <p>
            {getDay(weatherInfo.location.localtime_epoch)} |{' '}
            {getMonth(weatherInfo.location.localtime_epoch)}
          </p>
          <Forecast>
            <img
              src={`/icons/${
                weatherInfo.current.is_day ? 'day' : 'night'
              }/${handleWeatherIcons(weatherInfo.current.condition.code)}.svg`}
              alt={`Icon: ${handleWeatherIcons(
                weatherInfo.current.condition.code,
              )}`}
            />
            <div>
              <strong>
                {isCelsius
                  ? weatherInfo.current.temp_c.toFixed(0)
                  : weatherInfo.current.temp_f.toFixed(0)}
              </strong>
              <UnitButtons>
                <button type="button" onClick={() => setIsCelsius(true)}>
                  °C
                </button>
                <span />
                <button type="button" onClick={() => setIsCelsius(false)}>
                  °F
                </button>
              </UnitButtons>
            </div>
            <AdditionalInfo>
              <div>
                <FiCloud />
                <p>{weatherInfo.current.cloud}%</p>
              </div>
              <div>
                <FiWind />
                <p>{weatherInfo.current.wind_kph.toFixed(0)}km/h</p>
              </div>
              <div>
                <FiDroplet />
                <p>{weatherInfo.current.humidity}%</p>
              </div>
            </AdditionalInfo>
          </Forecast>
        </Container>
      )}
    </>
  );
};

export default CurrentWeather;
