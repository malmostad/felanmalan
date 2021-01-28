import { Hero } from '../../components/hero/index';
import { useUpdate } from '../../contexts/UpdateContext';
import { ButtonWrapper } from '../../components/buttons/index';

const UploadImageView = () => {
  const { setNextView, setCurrentView, setPreviousView } = useUpdate();

  const handleCLickNext = () => {
    setPreviousView('upload');
    setCurrentView('map');
    setNextView('description');
  };

  const handleCLickBack = () => {
    setPreviousView(undefined);
    setCurrentView('landing');
    setNextView('upload');
  };

  return (
    <>
      <Hero>
        <Hero.Content>
          <Hero.Title>Upload</Hero.Title>
        </Hero.Content>
      </Hero>
      <ButtonWrapper>
        <ButtonWrapper.Button inverted onClick={handleCLickBack}>
          Back
        </ButtonWrapper.Button>
        <ButtonWrapper.Button inverted onClick={handleCLickNext}>
          Next
        </ButtonWrapper.Button>
      </ButtonWrapper>
    </>
  );
};

export default UploadImageView;
