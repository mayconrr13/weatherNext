import React, { useContext } from 'react';
import { FiCloud, FiWind, FiDroplet } from 'react-icons/fi';

import { WeatherContext } from '../context/WeatherContext';

import { Container } from '../styles/components/AdditionalInfo';

const AdditionalInfo = () => {
    const { weatherInfo } = useContext(WeatherContext);

    return (
        <Container>
            <div>
                <FiCloud />
                <p>{weatherInfo?.current.cloud}%</p>
            </div>
            <div>
                <FiWind />
                <p>{weatherInfo?.current.wind_kph.toFixed(0)}km/h</p>
            </div>
            <div>
                <FiDroplet />
                <p>{weatherInfo?.current.humidity}%</p>
            </div>
        </Container>
    );
};

export default AdditionalInfo;
