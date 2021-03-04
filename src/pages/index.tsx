import React, { FormEvent, useState } from 'react';
import axios from 'axios';

import { Container } from '../styles/Home';

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
                    <h1>{weatherInfo.location.name}</h1>
                    <h1>{weatherInfo.location.country}</h1>
                    <h1>{weatherInfo.current.temp_c}</h1>
                    <h1>{weatherInfo.current.is_day}</h1>
                    {weatherInfo.forecast.forecastday.map(
                        (data: ForecastDailyProps) => (
                            <>
                                <p>{data.date}</p>
                                <p>{data.day.maxtemp_c}</p>
                                <p>{data.day.mintemp_c}</p>
                                <p>{data.day.condition.text}</p>
                            </>
                        ),
                    )}
                </>
            ) : (
                <p>{error}</p>
            )}
        </Container>
    );
}
