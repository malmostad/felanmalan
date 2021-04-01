import { useUpdate } from '../.././contexts/UpdateContext'
import React, { useEffect } from 'react'
import {
  StyledFollowUpContainer,
  StyledFullContainer,
  StyledOuter,
} from '../../components/styles/containers/Containers'

const FollowUpView = () => {
  const { setCurrentViewHeading, currentViewHeading } = useUpdate()

  useEffect(() => {
    setCurrentViewHeading('Tack för din felanmälan')
  }, [currentViewHeading])

  return (
    <>
      <StyledOuter>
        <p>Den hjälper oss hålla vår vackra stad iordning</p>
        <h4>Ärende: </h4>
      </StyledOuter>
    </>
  )
}

export default FollowUpView
