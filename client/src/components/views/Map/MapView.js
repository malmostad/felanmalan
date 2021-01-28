import { useUpdate } from '../../../contexts/UpdateContext';
import { ButtonWrapper } from '../../buttons';
import { Hero } from '../../hero/index';


const MapView = () => {
 
  const {setNextView, setCurrentView, setPreviousView} = useUpdate()

    const handleCLickNext= () => {
      setPreviousView("map");
      setCurrentView("description");
      setNextView("contact");
    }
    
    const handleCLickBack= () => {
      setPreviousView("landing");
      setCurrentView("upload");
      setNextView("map");
    }

    return (
    <>
        <Hero>
          <Hero.Content>
            <Hero.Title>Map</Hero.Title>
          </Hero.Content>
        </Hero>
        <ButtonWrapper>
          <ButtonWrapper.Button onClick={handleCLickBack}> Back </ButtonWrapper.Button>
          <ButtonWrapper.Button onClick={handleCLickNext}> Next </ButtonWrapper.Button>
        </ButtonWrapper>
      </>
    )
}

export default MapView
