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
        width: 100vw;
        height: 100vh;
    }

    button, input {
        cursor: pointer;
    }
`;

export default GlobalStyle;
