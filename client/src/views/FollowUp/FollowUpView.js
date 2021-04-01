import { useUpdate } from '../.././contexts/UpdateContext'
import React, { useEffect } from 'react'
import {
  StyledFollowUpContainer,
  StyledFullContainer,
  StyledOuter,
  StyledCookieContainer,
} from '../../components/styles/containers/Containers'

const FollowUpView = () => {
  const { setCurrentViewHeading, currentViewHeading } = useUpdate()

  useEffect(() => {
    setCurrentViewHeading('Tack för din felanmälan')
  }, [currentViewHeading])

  return (
    <>
      <StyledOuter>
        <StyledFollowUpContainer>
          <p>Den hjälper oss hålla vår vackra stad iordning</p>
          <h4>Ärende: </h4>
        </StyledFollowUpContainer>
      </StyledOuter>
      <StyledFullContainer></StyledFullContainer>
    </>
  )
}

export default FollowUpView
