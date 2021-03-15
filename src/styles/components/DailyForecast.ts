import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 650px;
  height: 185px;

  margin-bottom: 1rem;
  padding: 1rem;

  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 2px 4px #22222225;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  > p {
    font-size: 1rem;
  }

  > span {
    width: 100px;
    height: 1px;
    background: #222222;
  }

  > div {
    width: 100%;
    max-width: 350px;

    margin: 1rem auto 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 550px) {
    max-width: 700px;

    margin-left: auto;
    margin-right: auto;
  }
`;

export const DailyItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 7rem;

  img {
    width: 1.5rem;
    height: auto;
  }

  > p {
    font-size: 1.25rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 4rem;
  }
`;
