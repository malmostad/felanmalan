import { useState } from 'react'
import { useEffect } from 'react'
import { useUpdate } from '../../contexts/UpdateContext'
import {
  UploadImageView,
  MapView,
  DescriptionView,
  ContactInfoView,
  FollowUpView,
} from '../../views/index'
import { _LoadingContainer } from '../container/index'
import { Spinner } from '../loading'

const Steps = () => {
  const { currentView } = useUpdate()
  const formViews = [
    <UploadImageView />,
    <MapView />,
    <DescriptionView />,
    <ContactInfoView />,
    <FollowUpView />,
  ]
  const [current, setCurrent] = useState()

  useEffect(() => {
    console.log('triggered')
    formViews.map((View, index) => {
      if (currentView === index) {
        setCurrent(View)
      }
    })
  }, [currentView])

  return (
    <>
      {!current ? (
        <_LoadingContainer>
          <Spinner />
        </_LoadingContainer>
      ) : (
        current
      )}
    </>
  )
}

export default Steps
