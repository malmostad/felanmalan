import { useUpdate } from '../../../contexts/UpdateContext';
import { ButtonContainer } from '../../buttons';
import { Hero } from '../../hero/index';

const MapView = () => {
 
  const {setNextView, setCurrentView, setPreviousView} = useUpdate()

    const handleCLickNext= () => {
      setPreviousView("map")
      setCurrentView("description")
      setNextView("contact")
    }
    
    const handleCLickBack= () => {
      setPreviousView("landing")
      setCurrentView("upload")
      setNextView("map")
    }

    return (
    <>
        <Hero>
          <Hero.Content>
            <Hero.Title>Map</Hero.Title>
          </Hero.Content>
        </Hero>
        <ButtonContainer>
          <ButtonContainer.Button onClick={handleCLickBack}> Back </ButtonContainer.Button>
          <ButtonContainer.Button onClick={handleCLickNext}> Next </ButtonContainer.Button>
        </ButtonContainer>
      </>
    )
}

export default MapView
