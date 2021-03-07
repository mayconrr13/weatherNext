import React, { createContext, ReactNode, useState } from 'react';

interface WeatherContextData {
    city: string;
    setCity: (city: string) => void;
    error: string;
    setError: (error: string) => void;
    weatherInfo: WeatherInfoProps | null;
    setWeatherInfo: (weatherInfo: WeatherInfoProps | null) => void;
}

interface ChildrenProps {
    children: ReactNode;
}

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

const WeatherContext = createContext<WeatherContextData>(
    {} as WeatherContextData,
);

const WeatherProvider = ({ children }: ChildrenProps) => {
    const [city, setCity] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [weatherInfo, setWeatherInfo] = useState<WeatherInfoProps | null>(
        null,
    );

    return (
        <WeatherContext.Provider
            value={{
                city,
                setCity,
                error,
                setError,
                weatherInfo,
                setWeatherInfo,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export { WeatherContext, WeatherProvider };
