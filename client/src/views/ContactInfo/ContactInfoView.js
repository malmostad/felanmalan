import { HeadSection } from '../../components/headSection/index';
import { useUpdate } from '../../contexts/UpdateContext';
import { ButtonWrapper } from '../../components/buttons/index';

const ContactInfoView = () => {
  const { setNextView, setCurrentView, setPreviousView } = useUpdate();

  const handleCLickNext = () => {
    setPreviousView('contact');
    setCurrentView('follow');
  };

  const handleCLickBack = () => {
    setPreviousView('map');
    setCurrentView('description');
    setNextView('contact');
  };

  return (
    <>
      <HeadSection>
        <HeadSection.Content>
          <HeadSection.Title>ContactInfoView</HeadSection.Title>
        </HeadSection.Content>
      </HeadSection>

      <ButtonWrapper>
        <ButtonWrapper.Button onClick={handleCLickBack}>
          {' '}
          Back{' '}
        </ButtonWrapper.Button>
        <ButtonWrapper.Button onClick={handleCLickNext}>
          {' '}
          Next{' '}
        </ButtonWrapper.Button>
      </ButtonWrapper>
    </>
  );
};

export default ContactInfoView;
