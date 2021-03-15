import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      font-family: Montserrat,Arial, sans-serif;
      box-sizing: border-box;
      border: none;
    }

    body {
      -webkit-font-smoothing: antialiased;
    }

    button, input, a {
      cursor: pointer;
    }
`;

export default GlobalStyle;
