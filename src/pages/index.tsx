import React, { useContext } from 'react';
import { FiCloudRain } from 'react-icons/fi';

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

interface ForecastDailyProps {
    date: string;
    day: {
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
        condition: {
            text: string;
            code: string;
        };
    };
}

export default function Home() {
    const { error, weatherInfo } = useContext(WeatherContext);

    return (
        <Container>
            <img src="/images/at-day.jpg" alt="Background" />

            <SearchBox />

            {weatherInfo ? (
                <>
                    <Location>{weatherInfo.location.name}</Location>
                    <CurrentWeather>
                        <div>
                            <p>{weatherInfo.current.temp_c.toFixed(0)}</p>
                            <div>
                                <FiCloudRain />
                                <UnitMeasure>
                                    <button type="button">°C</button>
                                    <span />
                                    <button type="button">°F</button>
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
                                        minTemperature={data.day.mintemp_c}
                                        maxTemperature={data.day.maxtemp_c}
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
