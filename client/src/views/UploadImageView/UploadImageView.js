import { Hero } from '../../components/hero/index';
import { useUpdate } from '../../contexts/UpdateContext';
import { ButtonWrapper } from '../../components/buttons/index';
import Cookie from '../../components/cookie/Cookie';

const UploadImageView = () => {
  const {
    setNextView,
    setCurrentView,
    setPreviousView,
    acceptCookies,
  } = useUpdate();

  const handleCLickNext = () => {
    setPreviousView('upload');
    setCurrentView('map');
    setNextView('description');
  };

  return (
    <>
      {acceptCookies ? (
        <>
          <Hero>
            <Hero.Content>
              <Hero.Title>Upload</Hero.Title>
            </Hero.Content>
          </Hero>
          <ButtonWrapper>
            <ButtonWrapper.Button onClick={handleCLickNext}>
              Next
            </ButtonWrapper.Button>
          </ButtonWrapper>
        </>
      ) : (
        <Cookie />
      )}
    </>
  );
};

export default UploadImageView;
