import { ButtonWrapper } from '../../components/buttons/index';
import { LandingContainer } from '../../components/container/index';
import { useEffect, useState } from 'react';
import { useUpdate } from '../../contexts/UpdateContext';

const LandingView = () => {
  const { setPreviousView, setNextView, setCurrentView } = useUpdate();

  useEffect(() => {
    setPreviousView(undefined);
    setCurrentView('landing');
    setNextView('upload');
  }, []);

  const handleCLick = e => {
    setPreviousView('landing');
    setCurrentView('upload');
    setNextView('map');
  };

  return (
    <>
      <LandingContainer>
        <h1>Testing testing</h1>
        <ButtonWrapper>
       
          <ButtonWrapper.Button onClick={handleCLick}>
            Acceptera
          </ButtonWrapper.Button>
          
        </ButtonWrapper>
      </LandingContainer>
    </>
  );
};

export default LandingView;
