import React from 'react';
import { FiCloudRain } from 'react-icons/fi';

import { Container, Temperature } from '../styles/components/Forecast';

interface TemperatureProps {
    minTemperature: number;
    maxTemperature: number;
}

const Forecast = ({ minTemperature, maxTemperature }: TemperatureProps) => {
    return (
        <Container>
            <p>Today</p>
            <FiCloudRain />
            <Temperature>
                <p>{maxTemperature.toFixed(0)}°</p>
                <p>{minTemperature.toFixed(0)}°</p>
            </Temperature>
        </Container>
    );
};

export default Forecast;
