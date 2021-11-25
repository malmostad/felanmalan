import { createGlobalStyle } from "styled-components";
import MyriadProRegular from "../assets/fonts/Myriad/MyriadPro-Regular.otf";
import MyriadProLight from "../assets/fonts/Myriad/MyriadPro-Light.otf";
import MyriadProBold from "../assets/fonts/Myriad/MyriadPro-Bold.otf";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'MyriadPro';
  src: local('MyriadPro'), url(${MyriadProRegular}) format('opentype');
  font-weight: normal;
}
@font-face {
  font-family: 'MyriadPro';
  src: local('MyriadPro'), url(${MyriadProLight}) format('opentype');
  font-weight: lighter;
}
@font-face {
  font-family: 'MyriadPro';
  src: local('MyriadPro'), url(${MyriadProBold}) format('opentype');
  font-weight: bold;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: MyriadPro, Open sans, Verdana;
}

html {
  width: 100%;
}

a {
  color: white;
}

`;

export default GlobalStyle;
