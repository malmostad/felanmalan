import { ButtonWrapper } from '../../buttons/index';
import { LandingContainer } from '../../container/index';
import {useEffect, useState} from 'react'
import { useUpdate } from '../../../contexts/UpdateContext';

const LandingView = () => {

  const {setPreviousView, setNextView, setCurrentView} = useUpdate()

  useEffect(() => {
    setPreviousView(undefined);
    setCurrentView("landing");
    setNextView("upload");
  }, [])
  
  const handleCLick = (e) => {
    setPreviousView("landing");
    setCurrentView("upload");
    setNextView("map");
  }

  return (
    <>
      <LandingContainer>
        <h1> Testing </h1>
    
        <ButtonWrapper>
          <ButtonWrapper.Button onClick={handleCLick}> Acceptera </ButtonWrapper.Button>
        </ButtonWrapper>
      </LandingContainer>
    </>
  );
};

export default LandingView;
