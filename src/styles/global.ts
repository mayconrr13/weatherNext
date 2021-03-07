import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: Montserrat,Arial, sans-serif;
        color: #f4ede8;
        box-sizing: border-box;
        border: none;
    }

    body {
        > div {
            background: linear-gradient(180deg, #12121250, #12121250);
            min-height: 100vh;

            z-index: 10;
        }
    }

    button, input {
        cursor: pointer;
    }
`;

export default GlobalStyle;
