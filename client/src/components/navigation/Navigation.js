import { formViews } from '../../views/index'
import { useEffect, useState, useReducer } from 'react'
import { useUpdate } from '../../contexts/UpdateContext'
import { Button } from '../buttons/Buttons'

const Navigation = () => {
  const [disabledPrevious, setDisabledPrevious] = useState(false)
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
    setCreate(false)
    setSubmit(false)
    setDisabledNext(false)
    setDisabledPrevious(false)

    //First Page
    if (currentView === 0) {
      console.log('h')
    }
    //On last page to post the submit
    if (currentView + 1 === formViews.length - 1) {
      setDisabledNext(true)
      setSubmit(true)
    }
  }, [currentView, disabledNext, disabledPrevious])

  const handleNext = () => {
    dispatch({ type: 'handleClickNext' })
    console.log(currentView, 'clicked next')
  }

  const handlePrevious = () => {
    dispatch({ type: 'handleClickPrevious' })
    console.log(currentView, 'clicked previous')
  }

  const handleSubmit = () => {
    dispatch({ type: 'handleSubmit' })
    console.log('submit')
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
