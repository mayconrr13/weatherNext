import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

import { Container, Temperature } from '../styles/components/Forecast';

import handleWeatherIcons from '../utils/handleWeatherIcons';

interface TemperatureProps {
    minTemperature: number;
    maxTemperature: number;
    day: number;
}

const Forecast = ({
    minTemperature,
    maxTemperature,
    day,
}: TemperatureProps) => {
    const { weatherInfo } = useContext(WeatherContext);

    function getWeekDay(date: number) {
        const correctionTimezone = new Date().getTimezoneOffset() / 60;

        const completeDate = new Date(
            (date + correctionTimezone * 3600) * 1000,
        );
        const days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
        const dayOfWeek = days[completeDate.getDay()];

        return dayOfWeek;
    }

    return weatherInfo ? (
        <>
            <Container>
                <p>{getWeekDay(day)}</p>
                <img
                    src={`/icons/day/${handleWeatherIcons(
                        weatherInfo.current.condition.code,
                    )}.svg`}
                    alt={`Icon: ${handleWeatherIcons(
                        weatherInfo.current.condition.code,
                    )}`}
                />
                <Temperature>
                    <p>{maxTemperature.toFixed(0)}°</p>
                    <p>{minTemperature.toFixed(0)}°</p>
                </Temperature>
            </Container>
        </>
    ) : (
        <p>error</p>
    );
};

export default Forecast;
