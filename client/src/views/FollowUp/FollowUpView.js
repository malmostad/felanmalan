import { useUpdate } from '../.././contexts/UpdateContext'
import React, { useEffect } from 'react'

const FollowUpView = () => {
  const { setCurrentViewHeading, currentViewHeading } = useUpdate()

  useEffect(() => {
    setCurrentViewHeading('Tack för din felanmälan')
  }, [currentViewHeading])

  return (
    <>
      <h1>Follow up -</h1>
      <h4>Den hjälper oss hålla vår vackra stad iordning</h4>
      <h4>Ärende: </h4>
    </>
  )
}

export default FollowUpView
