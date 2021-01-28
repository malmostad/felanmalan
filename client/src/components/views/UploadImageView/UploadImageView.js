import { ButtonWrapper} from '../../buttons/index';
import { useUpdate } from '../../../contexts/UpdateContext'
import { Hero } from '../../hero';


const UploadImageView = () => {

  const {setNextView, setCurrentView, setPreviousView} = useUpdate()


  const handleCLickNext= () => {
    setPreviousView("upload");
    setCurrentView("map");
    setNextView("description");
  };

  const handleCLickBack= () => {
    setPreviousView(undefined);
    setCurrentView("landing");
    setNextView("upload");
  };

  return (
    <>
      <Hero>
        <Hero.Content>
          <Hero.Title>Upload</Hero.Title>
        </Hero.Content>
      </Hero>

      <ButtonWrapper>
        <ButtonWrapper.Button onClick={handleCLickBack}> Back </ButtonWrapper.Button>
        <ButtonWrapper.Button onClick={handleCLickNext}> Next </ButtonWrapper.Button>
      </ButtonWrapper>
    </>
  )
}

export default UploadImageView


