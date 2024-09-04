import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
  }
  }
  * {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyles;