import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ::-webkit-scrollbar {
    height: .5rem;
    width: .5rem;
  }

  ::-webkit-scrollbar-thumb {
    background: #797978;
    border-radius: 0;
    border-radius: 0 .18rem .18rem 0;
  }

  ::-webkit-scrollbar-track {
    background: #f2efe9;
    border-radius: 0 .24rem .24rem 0;
  }
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