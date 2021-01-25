import { createGlobalStyle } from 'styled-components';
import MalmoRubikRegularWoff2 from '../../public/fonts/MalmoRubrik/MalmoRubik-Regular.woff2'
import MalmoRubikRegularWoff from '../../public/fonts/MalmoRubrik/MalmoRubik-Regular.woff'
const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'MalmoRubik Regular';
  src: local('MalmoRubik Regular'), local('MalmoRubikRegular'),
  url(${NameOfYourFontWoff2}) format('woff2'),
  url(${NameOfYourFontWoff}) format('woff');
  font-weight: 300;
  font-style: normal;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
  body {
    font-family: 'MalmoRubik Regular', Arial, Helvetica, sans-serif ;
  }


`;


 
export default GlobalStyle;