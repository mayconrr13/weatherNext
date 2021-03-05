import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    img {
        position: absolute;
        top: 0;
        left: 0;

        object-fit: cover;
        object-position: 65% 0;
        background-position: center;
        background-size: cover;

        min-height: 100%;
        width: 100%;

        z-index: -1;
    }
`;

export const Location = styled.p`
    font-size: 1.75rem;
`;

export const CurrentWeather = styled.div``;

export const AdditionalInfo = styled.div``;

export const Forecast = styled.div``;
