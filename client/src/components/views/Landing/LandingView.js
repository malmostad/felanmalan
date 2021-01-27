import { Hero } from '../../hero/index';
import { ButtonContainer } from '../../buttons/index';
import {useState} from 'react'
import { useUpdate } from '../../../contexts/UpdateContext';

const LandingView = () => {

  const {renderNext, setRenderNext, renderPrevious, currentView, setCurrentView} = useUpdate()

  const handleCLick = (e) => {
    setRenderNext(!renderNext)
  }

  return (
    <>
      <Hero>
        <Hero.Content>
          <Hero.Title>title</Hero.Title>
        </Hero.Content>
      </Hero>
    
      <ButtonContainer>
        <ButtonContainer.Button onClick={handleCLick}> Next </ButtonContainer.Button>
      </ButtonContainer>
    </>
  );
};

export default LandingView;
