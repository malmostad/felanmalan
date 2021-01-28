import { Hero } from '../../hero/index';
import { useUpdate } from '../../../contexts/UpdateContext';
import { ButtonWrapper } from '../../buttons';

const DescriptionView = () => {

  const {setNextView, setCurrentView, setPreviousView} = useUpdate()

  const handleCLickNext= () => {
    setPreviousView("description");
    setCurrentView("contact");
    setNextView("");
  }
  
  const handleCLickBack= () => {
    setPreviousView("upload");
    setCurrentView("map");
    setNextView("description");
  }

    return (
        <>
        <Hero>
          <Hero.Content>
            <Hero.Title>DescriptionView</Hero.Title>
          </Hero.Content>
        </Hero>

        <ButtonWrapper>
          <ButtonWrapper.Button onClick={handleCLickBack}> Back </ButtonWrapper.Button>
          <ButtonWrapper.Button onClick={handleCLickNext}> Next </ButtonWrapper.Button>
        </ButtonWrapper>
      </>
    )
}

export default DescriptionView
