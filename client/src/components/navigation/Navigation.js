import { formViews } from '../../views/index'
import { useEffect, useState } from 'react'
import { useUpdate } from '../../contexts/UpdateContext'
import { Button } from '../buttons/Buttons'
import { postReport } from '../../api/api'
import { useReport } from '../../contexts/ReportContext'

const Navigation = () => {
  const [disabledPrevious, setDisabledPrevious] = useState(true)
  const { formState } = useReport()
  const {
    setNextView,
    setCurrentView,
    setPreviousView,
    currentView,
    disabledNext,
    setDisabledNext,
  } = useUpdate()

  useEffect(() => {}, [currentView, disabledNext, disabledPrevious])

  const handleClickNext = () => {
    if (currentView + 1 < formViews.length) {
      setDisabledPrevious(false)
      setPreviousView(currentView)
      setCurrentView((prevState) => prevState + 1)
      setNextView((prevState) => prevState + 1)
    } else {
      setDisabledNext(true)
      setDisabledPrevious(false)
    }
  }

  const handleClickPrevious = () => {
    if (currentView - 1 >= 0) {
      setDisabledNext(false)
      setPreviousView((prevState) => prevState - 1)
      setCurrentView((prevState) => prevState - 1)
      setNextView(currentView)
    } else {
      setDisabledNext(false)
      setDisabledPrevious(true)
    }
  }

  const handleSubmit = async () => {
    setCurrentView((prevState) => prevState - currentView)
    let res = await postReport('reports', formState)
  }

  return (
    <Button.Outer>
      <Button.Inner>
        {!disabledNext && (
          <Button
            bgGreen
            onClick={currentView + 1 === formViews.length ? handleSubmit : handleClickNext}>
            {currentView + 1 === formViews.length ? 'Skapa Ny' : 'next'}
          </Button>
        )}
        {!disabledPrevious && (
          <Button bgGreen onClick={handleClickPrevious}>
            {currentView + 1 === formViews.length ? setDisabledPrevious(true) : 'previous'}
          </Button>
        )}
      </Button.Inner>
    </Button.Outer>
  )
}

export default Navigation
