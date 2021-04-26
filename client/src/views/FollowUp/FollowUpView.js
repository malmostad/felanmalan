import { useUpdate } from '../.././contexts/UpdateContext'
import {
  StyledHeroHeadingThin,
  StyledSpanWord,
  StyledDescription,
  Errand,
  StyledText,
  StyledTextTitle,
} from '../../components/styles/Typography/Typography'
import React, { useEffect } from 'react'
import {
  StyledOuterFollowUpView,
  StyledContentFollowUpView,
  StyledHeroContainer,
} from '../../components/styles/containers/Containers'

const FollowUpView = () => {
  const { setCurrentViewHeading } = useUpdate()

  useEffect(() => {
    setCurrentViewHeading(
      <StyledHeroContainer>
        <StyledHeroHeadingThin>
          <StyledSpanWord>Tack</StyledSpanWord> för din <StyledSpanWord>felanmälan</StyledSpanWord>
        </StyledHeroHeadingThin>
      </StyledHeroContainer>
    )
  }, [])

  return (
    <>
      <StyledOuterFollowUpView>
        <StyledContentFollowUpView>
          <StyledDescription>
            <StyledTextTitle>Akut felanmälan på kvällar och helger.</StyledTextTitle>
            <StyledText>
              Om du vill felanmäla något som inte kan vänta på kvällar eller helger ringer du 040-34
              10 00 och väljer att bli kopplad till vår jourtjänst.
            </StyledText>
            Den hjälper oss hålla vår vackra stad iordning.{' '}
            <Errand href="#">Ärende: 5624805</Errand>
          </StyledDescription>
        </StyledContentFollowUpView>
      </StyledOuterFollowUpView>
    </>
  )
}

export default FollowUpView
