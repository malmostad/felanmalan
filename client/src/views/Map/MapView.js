import { HeadSection } from '../../components/headSection/index';
import { useUpdate } from '../../contexts/UpdateContext';
import { ButtonWrapper } from '../../components/buttons/index';

const MapView = () => {
  const { setNextView, setCurrentView, setPreviousView } = useUpdate();

  const handleCLickNext = () => {
    setPreviousView('map');
    setCurrentView('description');
    setNextView('contact');
  };

  const handleCLickBack = () => {
    setPreviousView('landing');
    setCurrentView('upload');
    setNextView('map');
  };

  return (
    <>
      <HeadSection>
        <HeadSection.Content>
          <HeadSection.Title>Map</HeadSection.Title>
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

export default MapView;
