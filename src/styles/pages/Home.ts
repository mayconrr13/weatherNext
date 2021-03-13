import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    height: max-content;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        position: fixed;
        bottom: 0;
        left: 0;

        display: table;

        object-fit: cover;
        object-position: 55% 0;
        background-position: center;
        background-size: cover;

        min-height: 100%;
        width: 100%;

        z-index: -1;
    }

    > span {
        width: 80vw;
        height: 1px;
        background: #f4ede8;
    }
`;

export const Location = styled.p`
    font-size: 1.75rem;
    margin-top: 4.5rem;
    margin-bottom: 1.75rem;
`;

export const CurrentWeather = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;

        > p {
            font-size: 7.5rem;
            font-weight: 400;
        }

        > div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            > img {
                width: 3rem;
                height: auto;
                margin-bottom: 1rem;

                position: relative;

                z-index: 2;
            }
        }
    }

    > p {
        font-size: 1rem;
    }
`;

export const UnitMeasure = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    > button {
        border: none;
        background: none;

        font-size: 1.5rem;
        color: #f4ede890;
    }

    > span {
        width: 1px;
        height: 1.75rem;
        background: #f4ede8;

        margin: 0 0.5rem;
    }

    button.active {
        color: #f4ede8;
    }
`;

export const DailyForecast = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 80vw;

    margin-top: 2rem;
`;
