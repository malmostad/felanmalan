import { formViews } from '../../views/index'
import { useEffect, useState, useReducer } from 'react'
import { useUpdate } from '../../contexts/UpdateContext'
import { Button } from '../buttons/Buttons'
import { navReducer } from '../../contexts/UpdateContext'

const Navigation = () => {
  const [disabledPrevious, setDisabledPrevious] = useState(true)
  const {
    setNextView,
    setCurrentView,
    setPreviousView,
    currentView,
    disabledNext,
    setDisabledNext,
  } = useUpdate()

  useEffect(() => {}, [currentView, disabledNext, disabledPrevious])

  const handleNext = () => {
    console.log('test, next')
  }

  return (
    <Button.Outer>
      <Button.Inner>
        <Button type="handleClickNext" onClick={handleNext}>
          Next
        </Button>
      </Button.Inner>
    </Button.Outer>
  )
}

export default Navigation
