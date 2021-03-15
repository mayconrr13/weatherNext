import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  max-width: 650px;
  height: 65px;

  margin-bottom: 1rem;
  padding: 1rem;

  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 2px 4px #22222225;

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    font-size: 1.5rem;
    min-width: 250px;
  }

  button {
    width: 1.5rem;
    height: 1.5rem;
    background: none;

    margin-left: 1rem;

    > svg {
      width: 1.5rem;
      height: auto;
    }
  }

  @media (min-width: 550px) {
    width: 100%;
    max-width: 700px;

    margin-left: auto;
    margin-right: auto;
  }
`;
