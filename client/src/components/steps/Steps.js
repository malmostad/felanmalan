import { useState, useEffect } from 'react'
import { useUpdate } from '../../contexts/UpdateContext'
import { formViews } from '../../views/index'
import { LoadingContainer } from '../loading'

const Steps = () => {
  const { currentView } = useUpdate()

  const [current, setCurrent] = useState()

  useEffect(() => {
    formViews.forEach((View, index) => {
      if (currentView === index) {
        setCurrent(View)
      }
    })
  }, [currentView])

  return (
    <>
      {!current ? (
        <LoadingContainer>
          <LoadingContainer.LoadingSpinner />
        </LoadingContainer>
      ) : (
        current
      )}
    </>
  )
}

export default Steps
