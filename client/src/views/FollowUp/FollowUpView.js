import { useUpdate } from '../.././contexts/UpdateContext'
import {
  StyledHeroHeadingThin,
  StyledSpanWord,
  Description,
  Errand,
} from '../../components/styles/Typography/Typography'
import React, { useEffect } from 'react'
import {
  StyledOuterFollowUpView,
  StyledContentFollowUpView,
} from '../../components/styles/containers/Containers'

const FollowUpView = () => {
  const { setCurrentViewHeading } = useUpdate()

  useEffect(() => {
    setCurrentViewHeading(
      <div>
        <StyledHeroHeadingThin>
          <StyledSpanWord>Tack</StyledSpanWord> för din <StyledSpanWord>felanmälan</StyledSpanWord>
        </StyledHeroHeadingThin>
      </div>
    )
  }, [])

  return (
    <>
      <StyledOuterFollowUpView>
        <StyledContentFollowUpView>
          <Description>Den hjälper oss hålla vår vackra stad iordning. </Description>
          <Errand href="#">Ärende: 5624805</Errand>
        </StyledContentFollowUpView>
      </StyledOuterFollowUpView>
    </>
  )
}

export default FollowUpView
