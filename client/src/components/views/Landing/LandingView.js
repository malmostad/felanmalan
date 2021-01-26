import { Hero } from '../../hero/index';
import { ButtonContainer } from '../../buttons/index';


const LandingView = () => {
  return (
    <>
      <Hero>
        <Hero.Content>
          <Hero.Title>Lägg till bilder på Problemet & Platsen</Hero.Title>
        </Hero.Content>
      </Hero>
    

        <ButtonContainer>
          <ButtonContainer.Content> Next </ButtonContainer.Content>
        </ButtonContainer>
     


    </>
  );
};

export default LandingView;
