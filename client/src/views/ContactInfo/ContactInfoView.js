import { Hero } from '../../components/hero/index';
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
      <Hero>
        <Hero.Content>
          <Hero.Title>ContactInfoView</Hero.Title>
        </Hero.Content>
      </Hero>

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
