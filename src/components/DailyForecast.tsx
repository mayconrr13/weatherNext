import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

import { Container, DailyItem } from '../styles/components/DailyForecast';

import handleWeatherIcons from '../utils/handleWeatherIcons';
import { getWeekDay } from '../utils/handleDateInfo';

interface ForecastDailyProps {
  date_epoch: number;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    condition: {
      text: string;
      code: number;
    };
  };
}

const DailyForecast = () => {
  const { isCelsius, weatherInfo, loading } = useContext(WeatherContext);

  return (
    <>
      {weatherInfo && (
        <Container>
          <p>Daily Forecast</p>
          <span />
          {loading ? (
            <div>Loading</div>
          ) : (
            <div>
              {weatherInfo.forecast.forecastday.map(
                (data: ForecastDailyProps) => {
                  return (
                    <DailyItem key={data.date_epoch}>
                      <p>{getWeekDay(data.date_epoch)}</p>
                      <img
                        src={`/icons/${
                          weatherInfo.current.is_day ? 'day' : 'night'
                        }/${handleWeatherIcons(
                          weatherInfo.current.condition.code,
                        )}.svg`}
                        alt={`Icon: ${handleWeatherIcons(
                          weatherInfo.current.condition.code,
                        )}`}
                      />
                      <div>
                        <p>
                          {isCelsius
                            ? data.day.maxtemp_c.toFixed(0)
                            : data.day.maxtemp_f.toFixed(0)}
                          °
                        </p>
                        <p>
                          {isCelsius
                            ? data.day.mintemp_c.toFixed(0)
                            : data.day.mintemp_f.toFixed(0)}
                          °
                        </p>
                      </div>
                    </DailyItem>
                  );
                },
              )}
            </div>
          )}
        </Container>
      )}
    </>
  );
};

export default DailyForecast;
