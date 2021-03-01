import { formViews } from '../../views/index'
import { useEffect, useState, useReducer } from 'react'
import { useUpdate } from '../../contexts/UpdateContext'
import { Button } from '../buttons/Buttons'
import { postReport } from '../../api/api'
import { useReport } from '../../contexts/ReportContext'

const Navigation = () => {
  const [disabledPrevious, setDisabledPrevious] = useState(true)
  const [create, setCreate] = useState(false)
  const { formState } = useReport()
  const {
    setCurrentView,
    currentView,
    disabledNext,
    setDisabledNext,
    setCurrent,
    showSubmit,
    setShowSubmit,
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
    setDisabledNext(true)
    setShowSubmit(false)
    setCreate(false)
    //first page
    if (currentView <= 0) {
      setDisabledNext(true)
      setDisabledPrevious(false)
    }
    //contact page
    if (currentView + 1 === formViews.length - 1) {
      setShowSubmit(true)
      setDisabledNext(false)
    }

    // following up page
    if (currentView + 1 === formViews.length) {
      setDisabledPrevious(false)
      setDisabledNext(false)
      setCreate(true)
    }
  }, [currentView])

  const handleNext = () => {
    dispatch({ type: 'handleClickNext' })
  }

  const handlePrevious = () => {
    dispatch({ type: 'handleClickPrevious' })
  }

  const createNew = () => {
    dispatch({ type: 'createNew' })
    setCurrentView((prevState) => prevState - currentView)
  }

  const handleSubmit = async () => {
    dispatch({ type: 'handleSubmit' })
    let res = await postReport('reports', formState)
  }

  return (
    <Button.Outer>
      <Button.Inner>
        {disabledNext && <Button onClick={handleNext}>Next</Button>}
        {showSubmit && <Button onClick={handleSubmit}>Submit</Button>}
        {create && <Button onClick={createNew}>Skapa ny</Button>}
        {disabledPrevious && <Button onClick={handlePrevious}>previous</Button>}
      </Button.Inner>
    </Button.Outer>
  )
}

export default Navigation
