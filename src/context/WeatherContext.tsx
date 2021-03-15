import React, { createContext, ReactNode, useState } from 'react';

interface WeatherContextData {
  city: string;
  setCity: (city: string) => void;
  error: string;
  setError: (error: string) => void;
  weatherInfo: WeatherInfoProps | null;
  setWeatherInfo: (weatherInfo: WeatherInfoProps | null) => void;
  isCelsius: boolean;
  setIsCelsius: (isCelsiues: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  darkTheme: boolean;
  setDarkTheme: (darkTheme: boolean) => void;
}

interface ChildrenProps {
  children: ReactNode;
}

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
      code: number;
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
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfoProps | null>(null);
  const [isCelsius, setIsCelsius] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        error,
        setError,
        weatherInfo,
        setWeatherInfo,
        isCelsius,
        setIsCelsius,
        loading,
        setLoading,
        darkTheme,
        setDarkTheme,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
