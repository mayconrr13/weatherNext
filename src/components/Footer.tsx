import React, { useContext } from 'react';
import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { WeatherContext } from '../context/WeatherContext';

import { Container } from '../styles/components/Footer';

const Footer = () => {
    const { weatherInfo } = useContext(WeatherContext);

    return (
        <Container info={!!weatherInfo}>
            <p>Developed by &lt;Maycon/&gt;</p>
            <div>
                <Link href="https://github.com/mayconrr13/weatherNext">
                    <FiGithub />
                </Link>
                <Link href="https://www.linkedin.com/in/mayconreisrosario/">
                    <FiLinkedin />
                </Link>
            </div>
        </Container>
    );
};

export default Footer;
