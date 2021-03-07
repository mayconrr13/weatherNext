import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: linear-gradient(180deg, #12121240, #12121210);

    img {
        position: absolute;
        top: 0;
        left: 0;

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

export const Form = styled.form`
    width: 80vw;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 1rem;
    margin: 1.5rem 0;

    background: none;
    border-bottom: 1px solid #f4ede8;

    > input {
        height: 50px;
        width: calc(80vw - 50px);
        background: none;

        font-size: 1.5rem;

        &::placeholder {
            color: #f4ede8;
        }
    }

    > button {
        height: 50px;
        width: 50px;
        background: none;

        > svg {
            height: 1.5rem;
            width: auto;
        }
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

            > svg {
                width: 3rem;
                height: auto;
                margin-bottom: 0.5rem;
            }
        }
    }

    > {
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

        font-size: 1.75rem;
    }

    > span {
        width: 1px;
        height: 1.75rem;
        background: #f4ede8;

        margin: 0 0.5rem;
    }
`;

export const AdditionalInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 2rem 0;

    width: 80vw;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        > svg {
            width: 2.25rem;
            height: auto;
        }

        > p {
            font-size: 1.25rem;
        }
    }
`;

export const Forecast = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 80vw;

    margin-top: 2rem;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        height: 7rem;

        font-size: 1.25rem;

        > svg {
            width: 1.75rem;
            height: auto;
        }
    }
`;

export const Temperature = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 1.25rem;
`;
