import { Hero } from '../../components/hero/index';
import { useUpdate } from '../../contexts/UpdateContext';
import { ButtonWrapper } from '../../components/buttons/index';

const ContactInfoView = () => {
  const { setNextView, setCurrentView, setPreviousView } = useUpdate();

  const handleClickNext = () => {
    setPreviousView('contact');
    setCurrentView('follow');
  };

  const handleClickPrevious= () => {
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
        <ButtonWrapper.Button onClick={handleClickPrevious}>
          Back
        </ButtonWrapper.Button>
        <ButtonWrapper.Button onClick={handleClickNext}>
          Next
        </ButtonWrapper.Button>
      </ButtonWrapper>
    </>
  );
};

export default ContactInfoView;
