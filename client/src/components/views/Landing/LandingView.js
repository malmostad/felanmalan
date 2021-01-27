import { Hero } from '../../hero/index';
import { ButtonContainer } from '../../buttons/index';
import {useEffect, useState} from 'react'
import { useUpdate } from '../../../contexts/UpdateContext';

const LandingView = () => {

  const {setPreviousView, setNextView, setCurrentView} = useUpdate()

  useEffect(() => {
    setPreviousView(undefined)
    setCurrentView("landing")
    setNextView("upload")
  }, [])
  
  const handleCLick = (e) => {
    setPreviousView("landing")
    setCurrentView("upload")
    setNextView("map")
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
