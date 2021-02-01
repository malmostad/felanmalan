import GlobalStyle from './globalstyles/GlobalStyle'
import { useUpdate } from './contexts/UpdateContext'
import { useEffect } from 'react'
//Views
import Steps from './components/steps/Steps'
const App = () => {
  return (
    <>
      <GlobalStyle />

      <Steps />
    </>
  )
}

export default App
