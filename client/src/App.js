import GlobalStyle from './globalstyles/GlobalStyle';
import { useUpdate } from './contexts/UpdateContext';
import {useEffect} from 'react'
//Views
import Steps from './components/steps/Steps'
const App = () => {

  const {currentView, setCurrentView} = useUpdate()


  useEffect(() => {
    console.log("current view app", currentView)
  }, [currentView])

  return ( 
    <>
      <GlobalStyle />
     
      <Steps />

    </>
  );
};

export default App;
