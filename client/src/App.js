import GlobalStyle from './globalstyles/GlobalStyle';
import { useUpdate } from './contexts/UpdateContext';
//Views
import LandingView from './components/views/Landing/LandingView';
import UploadImageView from './components/views/UploadImageView/UploadImageView';

const App = () => {

  const {renderNext, renderPrevious, currentView, setCurrentView} = useUpdate()


  return (
    <>
      <GlobalStyle />
 
      
         <LandingView />
      

    </>
  );
};

export default App;
