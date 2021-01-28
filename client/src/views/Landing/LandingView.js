import { ButtonWrapper } from '../../components/buttons/index';
import { LandingContainer } from '../../components/container/index';
import { useEffect, useState } from 'react';
import { useUpdate } from '../../contexts/UpdateContext';
import { useReport } from '../../contexts/ReportContext';
import ReadMore from '../../components/ReadMore/ReadMore';

const LandingView = () => {
  const { setPreviousView, setNextView, setCurrentView, readMore, setReadMore } = useUpdate();
  const {report, setReport} = useReport()



  useEffect(() => {
    setPreviousView(undefined);
    setCurrentView('landing');
    setNextView('upload');
  }, []);

  const navigate = () => {
    setPreviousView('landing');
    setCurrentView('upload');
    setNextView('map');
  }

  const handleCLickContinue = () => {
    setReport({...report, acceptedCookies: true})
    navigate()
  };

  const handleClickReadMore = () => {
    setReadMore(true)
  }
 
 

  return (
    <>
      <LandingContainer>
        <h1>Testing testing</h1>
        {readMore && <ReadMore />}
        <ButtonWrapper>
          <ButtonWrapper.Container>
            <ButtonWrapper.Button onClick={handleClickReadMore}>
              läs mer
            </ButtonWrapper.Button>
            <ButtonWrapper.Button onClick={handleCLickContinue}>
              Acceptera
            </ButtonWrapper.Button>
          </ButtonWrapper.Container>
        </ButtonWrapper>
      </LandingContainer>
    </>
  );
};

export default LandingView;
