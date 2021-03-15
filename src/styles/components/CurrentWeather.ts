import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 650px;

  margin-bottom: 1rem;
  padding: 1rem;

  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 2px 4px #22222225;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h3 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  > p {
    font-size: 1.5rem;
  }

  > svg {
    width: 6rem;
    height: auto;
  }

  @media (min-width: 550px) {
    max-width: 700px;

    margin-left: auto;
    margin-right: auto;
  }
`;

export const Forecast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin: 3rem 0 0.5rem 0;

  max-width: 350px;
  width: 100%;

  > img {
    width: 6rem;
    height: auto;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > strong {
      font-size: 10rem;
      font-weight: 400;
    }
  }

  @media (min-width: 550px) {
    flex-direction: row;
    min-width: 480px;
    max-width: 580px;

    > svg {
      margin-right: 1rem;
    }
  }
`;

export const UnitButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 5rem;

  button {
    font-size: 1.75rem;
    background: none;
  }

  span {
    width: 1px;
    height: 1.75rem;
    background: #222222;
  }
`;

export const AdditionalInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 350px;

  padding: 0 1rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    svg {
      width: 2rem;
      height: auto;

      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1.25rem;
    }
  }

  @media (min-width: 550px) {
    flex-direction: column;

    height: 250px;
    width: 7rem;

    padding: 0;
  }
`;
