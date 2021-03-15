import styled, { css } from 'styled-components';

interface ThemeCheck {
  theme: number;
}

export const Container = styled.div<ThemeCheck>`
  min-width: 375px;
  height: 100vh;
  overflow-y: auto;

  ${(props) =>
    props.theme === 1
      ? css`
          background: linear-gradient(
            287.35deg,
            #fdbb2d 23.11%,
            #64afd3 96.52%
          );
        `
      : css`
          background: linear-gradient(
            284.04deg,
            #090705 0%,
            #353036 18.23%,
            #574b4a 72.4%,
            #19181e 100%
          );
        `};
  transition: background 0.2s;
  background-size: 100% 100%;

  padding: 2rem 1rem 0 1rem;

  @media (min-width: 550px) {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  font-size: 1.25rem;

  p {
    font-size: 1.25rem;
    text-align: center;
    color: #ffffff;

    padding-bottom: 2rem;
  }

  a,
  a:after {
    text-decoration: none;
    color: inherit;
  }
`;

export const Loading = styled.div`
  width: 100%;
  max-width: 650px;
  height: 522px;

  margin-bottom: 1rem;
  padding: 1rem;

  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 2px 4px #22222225;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 550px) {
    max-width: 700px;
    height: 417px;
  }

  > div {
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(34, 34, 34, 0.2);
    border-right: 1.1em solid rgba(34, 34, 34, 0.2);
    border-bottom: 1.1em solid rgba(34, 34, 34, 0.2);
    border-left: 1.1em solid #222222;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
    border-radius: 50%;
    width: 10em;
    height: 10em;

    &::after {
      border-radius: 50%;
      width: 10em;
      height: 10em;
    }

    @-webkit-keyframes load8 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }

  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const Error = styled.div`
  width: 100%;
  max-width: 650px;
  height: 100px;

  margin-bottom: 1rem;
  padding: 1rem;

  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 2px 4px #22222225;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  p {
    font-size: 1.5rem;
  }

  @media (min-width: 550px) {
    max-width: 700px;
  }
`;
