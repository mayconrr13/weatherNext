import React, { useContext } from 'react';

import { WeatherContext } from '../context/WeatherContext';

import {
    Container,
    Location,
    CurrentWeather,
    UnitMeasure,
    DailyForecast,
} from '../styles/pages/Home';

import Footer from '../components/Footer';
import SearchBox from '../components/SearchBox';
import AdditionalInfo from '../components/AdditionalInfo';
import Forecast from '../components/Forecast';

import handleWeatherIcons from '../utils/handleWeatherIcons';

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

export default function Home() {
    const { error, weatherInfo, isCelsius, setIsCelsius } = useContext(
        WeatherContext,
    );

    return (
        <Container>
            <img
                src={`/images/${
                    weatherInfo?.current.is_day ? 'at-day' : 'at-night'
                }.jpg`}
                alt="Background"
            />

            <SearchBox />

            {weatherInfo ? (
                <>
                    <Location>{weatherInfo.location.name}</Location>
                    <CurrentWeather>
                        <div>
                            <p>
                                {isCelsius
                                    ? weatherInfo.current.temp_c.toFixed(0)
                                    : weatherInfo.current.temp_f.toFixed(0)}
                            </p>
                            <div>
                                <img
                                    src={`/icons/${
                                        weatherInfo.current.is_day
                                            ? 'day'
                                            : 'night'
                                    }/${handleWeatherIcons(
                                        weatherInfo.current.condition.code,
                                    )}.svg`}
                                    alt={`Icon: ${handleWeatherIcons(
                                        weatherInfo.current.condition.code,
                                    )}`}
                                />
                                <UnitMeasure>
                                    <button
                                        type="button"
                                        className={isCelsius ? 'active' : ''}
                                        onClick={() => setIsCelsius(true)}
                                    >
                                        °C
                                    </button>
                                    <span />
                                    <button
                                        type="button"
                                        className={isCelsius ? '' : 'active'}
                                        onClick={() => setIsCelsius(false)}
                                    >
                                        °F
                                    </button>
                                </UnitMeasure>
                            </div>
                        </div>
                        <p>{weatherInfo.current.condition.text}</p>
                    </CurrentWeather>
                    <AdditionalInfo />
                    <span />
                    <DailyForecast>
                        {weatherInfo &&
                            weatherInfo.forecast.forecastday.map(
                                (data: ForecastDailyProps) => (
                                    <Forecast
                                        minTemperature={
                                            isCelsius
                                                ? data.day.mintemp_c
                                                : data.day.mintemp_f
                                        }
                                        maxTemperature={
                                            isCelsius
                                                ? data.day.maxtemp_c
                                                : data.day.maxtemp_f
                                        }
                                        day={data.date_epoch}
                                    />
                                ),
                            )}
                    </DailyForecast>
                </>
            ) : (
                <p>{error}</p>
            )}

            <Footer />
        </Container>
    );
}
