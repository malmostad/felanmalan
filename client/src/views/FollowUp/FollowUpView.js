import { useUpdate } from '../.././contexts/UpdateContext'
import {
  StyledHeroHeadingThin,
  StyledSpanWord,
} from '../../components/styles/Typography/Typography'
import React, { useEffect } from 'react'
import {
  StyledOuterFollowUpView,
  StyledContentFollowUpView,
} from '../../components/styles/containers/Containers'

const FollowUpView = () => {
  const { setCurrentViewHeading, currentViewHeading } = useUpdate()

  useEffect(() => {
    setCurrentViewHeading(
      <StyledHeroHeadingThin>
        <StyledSpanWord>Tack</StyledSpanWord> för din <StyledSpanWord>felanmälan</StyledSpanWord>
      </StyledHeroHeadingThin>
    )
  }, [currentViewHeading])

  return (
    <>
      <StyledOuterFollowUpView>
        <StyledContentFollowUpView>
          <p>Den hjälper oss hålla vår vackra stad iordning</p>
          <h4>Ärende: </h4>
        </StyledContentFollowUpView>
      </StyledOuterFollowUpView>
    </>
  )
}

export default FollowUpView
