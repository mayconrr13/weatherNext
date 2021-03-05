import React, { FormEvent, useState } from 'react';
import {
    FiCloudRain,
    FiCloud,
    FiWind,
    FiDroplet,
    FiGithub,
    FiLinkedin,
} from 'react-icons/fi';
import axios from 'axios';

import {
    Container,
    Location,
    CurrentWeather,
    AdditionalInfo,
    Forecast,
} from '../styles/pages/Home';
import Footer from '../components/Footer';

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

interface WeatherInfoProps {
    location: {
        name: string;
        region: string;
        country: string;
        localtime_epoch: number;
    };
    current: {
        temp_c: number;
        temp_f: number;
        is_day: number;
        condition: {
            text: string;
            code: string;
        };
        wind_kph: number;
        wind_degree: number;
        wind_dir: string;
        pressure_mb: string;
        precip_mm: string;
        humidity: string;
        cloud: string;
    };
    forecast: {
        forecastday: ForecastDailyProps[];
    };
}

export default function Home() {
    const [city, setCity] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [weatherInfo, setWeatherInfo] = useState<WeatherInfoProps | null>(
        null,
    );

    async function handleSubmit(event: FormEvent): Promise<void> {
        event.preventDefault();

        if (!city) {
            setError('Please, type a city name');
            return;
        }

        try {
            const response = await axios.get(
                `https://api.weatherapi.com/v1/forecast.json?key=1a30c2c65ae9479db8732838210403&q=${city}&days=7&aqi=no&alerts=no
                `,
            );
            const fetchedData = await response.data;

            setWeatherInfo(fetchedData);
            console.log(fetchedData.forecast.forecastday);

            setCity('');
        } catch (err) {
            setError('No matching location found');
            setWeatherInfo(null);
            setCity('');
        }
    }

    return (
        <Container>
            <img src="/images/at-day.jpg" alt="Background" />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {weatherInfo ? (
                <>
                    <Location>
                        {weatherInfo.location.name},{' '}
                        {weatherInfo.location.country}
                    </Location>
                    <CurrentWeather>
                        <div>
                            <strong>13</strong>
                            <div>
                                <FiCloudRain />
                                <div>
                                    <p>oC</p>
                                    <span />
                                    <p>oF</p>
                                </div>
                            </div>
                        </div>
                        <p>Patchy rain possible</p>
                    </CurrentWeather>
                    <AdditionalInfo>
                        <div>
                            <FiCloud />
                            <p>15%</p>
                        </div>
                        <div>
                            <FiWind />
                            <p>11 km/h</p>
                        </div>
                        <div>
                            <FiDroplet />
                            <p>15%</p>
                        </div>
                    </AdditionalInfo>
                    <span />
                    <Forecast>
                        <div>
                            <p>Today</p>
                            <FiCloudRain />
                            <div>
                                <p>15o</p>
                                <p>12o</p>
                            </div>
                        </div>
                        <div>
                            <p>Today</p>
                            <FiCloudRain />
                            <div>
                                <p>15o</p>
                                <p>12o</p>
                            </div>
                        </div>
                        <div>
                            <p>Today</p>
                            <FiCloudRain />
                            <div>
                                <p>15o</p>
                                <p>12o</p>
                            </div>
                        </div>
                    </Forecast>
                    <Footer />
                </>
            ) : (
                <p>{error}</p>
            )}
        </Container>
    );
}
