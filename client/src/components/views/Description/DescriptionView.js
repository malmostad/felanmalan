import { Hero } from '../../hero/index';
import { useUpdate } from '../../../contexts/UpdateContext';
import { ButtonContainer } from '../../buttons';

const DescriptionView = () => {

  const {setNextView, setCurrentView, setPreviousView} = useUpdate()

  const handleCLickNext= () => {
    setPreviousView("description")
    setCurrentView("contact")
    setNextView("")
  }
  
  const handleCLickBack= () => {
    setPreviousView("upload")
    setCurrentView("map")
    setNextView("description")
  }

    return (
        <>
        <Hero>
          <Hero.Content>
            <Hero.Title>DescriptionView</Hero.Title>
          </Hero.Content>
        </Hero>

        <ButtonContainer>
          <ButtonContainer.Button onClick={handleCLickBack}> Back </ButtonContainer.Button>
          <ButtonContainer.Button onClick={handleCLickNext}> Next </ButtonContainer.Button>
        </ButtonContainer>
      </>
    )
}

export default DescriptionView
