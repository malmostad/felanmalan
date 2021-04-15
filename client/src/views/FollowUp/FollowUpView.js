import { useUpdate } from '../.././contexts/UpdateContext'
import {
  StyledHeroHeadingThin,
  StyledSpanWord,
  StyledDescription,
  Errand,
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
            Den hjälper oss hålla vår vackra stad iordning.{' '}
            <Errand href="#">Ärende: 5624805</Errand>
          </StyledDescription>
        </StyledContentFollowUpView>
      </StyledOuterFollowUpView>
    </>
  )
}

export default FollowUpView
