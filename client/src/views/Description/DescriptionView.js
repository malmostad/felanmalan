import { HeadSection } from '../../components/headSection/index';
import { useUpdate } from '../../contexts/UpdateContext';
import { ButtonWrapper } from '../../components/buttons/index';

const DescriptionView = () => {
  const { setNextView, setCurrentView, setPreviousView } = useUpdate();

  const handleCLickNext = () => {
    setPreviousView('description');
    setCurrentView('contact');
    setNextView('');
  };

  const handleCLickBack = () => {
    setPreviousView('upload');
    setCurrentView('map');
    setNextView('description');
  };

  return (
    <>
      <HeadSection>
        <HeadSection.Content>
          <HeadSection.Title>DescriptionView</HeadSection.Title>
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

export default DescriptionView;
