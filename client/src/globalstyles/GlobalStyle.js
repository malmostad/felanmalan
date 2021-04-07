import { createGlobalStyle } from 'styled-components'
import MalmoRubikRegularWoff2 from '../assets/fonts/MalmoRubrik/MalmoRubrik-Regular.woff2'
import MyriadProRegular from '../assets/fonts/Myriad/MyriadPro-Regular.otf'
import MyriadProLight from '../assets/fonts/Myriad/MyriadPro-Light.otf'
import MyriadProBold from '../assets/fonts/Myriad/MyriadPro-Bold.otf'

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
  overflow-x: hidden;
}

body {
  font-family: MyriadPro, Open sans, Verdana;
}

html {
  width: 100%;
}

`

export default GlobalStyle
