import { createGlobalStyle } from "styled-components";
import OpenSansBold from "../assets/fonts/Open_Sans/static/OpenSans/OpenSans-Bold.ttf";
import OpenSansRegular from "../assets/fonts/Open_Sans/static/OpenSans/OpenSans-Regular.ttf";
import OpenSansLight from "../assets/fonts/Open_Sans/static/OpenSans/OpenSans-Light.ttf";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Open sans';
  src: local('Open sans'), url(${OpenSansRegular}) format('opentype');
  font-weight: normal;
}
@font-face {
  font-family: 'Open sans';
  src: local('Open sans'), url(${OpenSansLight}) format('opentype');
  font-weight: lighter;
}
@font-face {
  font-family: 'Open sans';
  src: local('Open sans'), url(${OpenSansBold}) format('opentype');
  font-weight: bold;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html * {
  font-family: Open sans, sans-serif !important;
}

html {
  width: 100%;
}

a {
  color: white;
}

`;

export default GlobalStyle;
