import { formViews } from '../../views/index'
import { useEffect, useState, useReducer } from 'react'
import { useUpdate } from '../../contexts/UpdateContext'
import { Button } from '../buttons/Buttons'

const Navigation = () => {
  const [disabledPrevious, setDisabledPrevious] = useState(true)
  const [submit, setSubmit] = useState(false)
  const [create, setCreate] = useState(false)
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
      case 'handleSubmit':
        return setCurrentView(currentView + 1)
      case 'createNew':
        return setCurrentView((prevState) => prevState - currentView)
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
    setDisabledPrevious(true)
    setDisabledNext(false)
    //first page
    if (currentView <= 0) {
      setDisabledNext(false)
      setDisabledPrevious(false)
    }
    if (currentView + 1 === formViews.length - 1) {
      setSubmit(true)
      setDisabledNext(true)
    }
  }, [currentView])

  const handleNext = () => {
    dispatch({ type: 'handleClickNext' })
  }

  const handlePrevious = () => {
    dispatch({ type: 'handleClickPrevious' })
  }

  const handleSubmit = () => {
    dispatch({ type: 'handleSubmit' })
  }

  const createNew = () => {
    dispatch({ type: 'createNew' })
  }

  return (
    <Button.Outer>
      <Button.Inner>
        {!disabledNext && <Button onClick={handleNext}>Next</Button>}
        {submit && <Button onClick={handleSubmit}>Submit</Button>}
        {create && <Button onClick={createNew}>Skapa ny</Button>}
        {disabledPrevious && <Button onClick={handlePrevious}>previous</Button>}
      </Button.Inner>
    </Button.Outer>
  )
}

export default Navigation
