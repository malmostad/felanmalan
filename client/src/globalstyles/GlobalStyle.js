import { createGlobalStyle } from 'styled-components'
import MalmoRubikRegularWoff2 from '../assets/fonts/MalmoRubrik/MalmoRubrik-Regular.woff2'

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'MalmoRubik Regular';
  src: url(${MalmoRubikRegularWoff2}) format('woff2');
  src: local('MalmoRubik Regular'), local('MalmoRubikRegular');
  font-weight: 300;
  font-style: normal;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

body {
    font-family: 'MalmoRubik Regular', Arial, Helvetica, sans-serif ;
}

html {
  width: 100%;
}


`

export default GlobalStyle
