import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    overflow: hidden;
  }

  body {
    color: #000;
    font-size: 62.5%;
    font-family: 'Balsamiq Sans', cursive;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
  }
`;
