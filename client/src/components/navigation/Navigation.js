import { formViews } from '../../views/index'
import { useEffect, useState, useReducer } from 'react'
import { useUpdate } from '../../contexts/UpdateContext'
import { Button } from '../buttons/Buttons'

const Navigation = () => {
  const [disabledPrevious, setDisabledPrevious] = useState(true)
  const {
    setNextView,
    setCurrentView,
    setPreviousView,
    currentView,
    disabledNext,
    setDisabledNext,
    setCurrent,
  } = useUpdate()

  const reducer = (state, action) => {
    switch (action.type) {
      case 'handleClickNext':
        return setCurrentView(currentView + 1)
      case 'handleClickPrevious':
        return setCurrentView(currentView - 1)
      default:
        throw new Error()
    }
  }

  const [state, dispatch] = useReducer(reducer, currentView)

  useEffect(() => {
    formViews.forEach((View, index) => {
      if (currentView === index) {
        setCurrent(View)
      }
    })
  }, [currentView])

  const handleNext = () => {
    dispatch({ type: 'handleClickNext' })
    console.log(currentView, 'clicked next')
  }

  const handlePrevious = () => {
    dispatch({ type: 'handleClickPrevious' })
    console.log(currentView, 'clicked previous')
  }

  return (
    <Button.Outer>
      <Button.Inner>
        <Button onClick={handleNext}>Next</Button>
        <Button onClick={handlePrevious}>previous</Button>
      </Button.Inner>
    </Button.Outer>
  )
}

export default Navigation
