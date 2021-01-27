import { Hero } from '../../hero/index';
import { useUpdate } from '../../../contexts/UpdateContext';
import { ButtonContainer } from '../../buttons';

const ContactInfoView = () => {

  const {setNextView, setCurrentView, setPreviousView} = useUpdate()


  const handleCLickNext= () => {
    setPreviousView("contact")
    setCurrentView("follow")
    
  }
  
  const handleCLickBack= () => {
    setPreviousView("map")
    setCurrentView("description")
    setNextView("contact")
  }

    return (
        <>
        <Hero>
          <Hero.Content>
            <Hero.Title>ContactInfoView</Hero.Title>
          </Hero.Content>
        </Hero>

        <ButtonContainer>
          <ButtonContainer.Button onClick={handleCLickBack}> Back </ButtonContainer.Button>
          <ButtonContainer.Button onClick={handleCLickNext}> Next </ButtonContainer.Button>
        </ButtonContainer>
      </>
    )
}

export default ContactInfoView
