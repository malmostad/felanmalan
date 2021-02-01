import { HeadSection } from '../../components/headSection/index';
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
      <HeadSection>
        <HeadSection.Content>
          <HeadSection.Title>Upload</HeadSection.Title>
        </HeadSection.Content>
      </HeadSection>
      <ButtonWrapper>
        <ButtonWrapper.Button onClick={handleCLickBack}>
          Back
        </ButtonWrapper.Button>
        <ButtonWrapper.Button onClick={handleCLickNext}>
          Next
        </ButtonWrapper.Button>
      </ButtonWrapper>
    </>
  );
};

export default UploadImageView;
