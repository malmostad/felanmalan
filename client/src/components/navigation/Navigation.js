
import { formViews } from '../../views/index'
import { useEffect, useState } from 'react'
import {useUpdate} from '../../contexts/UpdateContext'
import { Button } from '../buttons/Buttons'

const Navigation = () => {
  const [disabledPrevious, setDisabledPrevious] = useState(false)
  const [disabledNext, setDisabledNext] = useState(false)
  const {
    setNextView,
    setCurrentView,
    setPreviousView,
    currentView,
  } = useUpdate()

  useEffect(() => {
    if (currentView + 1 >= formViews.length) {
      setDisabledNext(true)
      setDisabledPrevious(false)
    } else if (currentView === 0) {
      setDisabledNext(false)
      setDisabledPrevious(true)
    }
  }, [currentView])

  const handleClickNext = () => {
    setPreviousView((prevState) => prevState)
    setCurrentView((prevState) => prevState + 1)
    setNextView((prevState) => prevState - 1)
  }

  const handleClickPrevious = () => {
    setPreviousView(currentView - 1)
    setCurrentView(currentView - 1)
    setNextView(currentView)
  }

  const handleSubmit = () => {
    console.log('submit')
  }

  return (
    <Button.Outer>
      <Button.Inner>
        {!disabledNext && (
          <Button
            inverted
            onClick={!disabledNext ? handleClickNext : handleSubmit}
          >
            {!disabledNext ? 'Next' : 'Submit'}
          </Button>
        )}
        {!disabledPrevious && (
          <Button inverted onClick={handleClickPrevious}>
            Previous
          </Button>
        )}
      </Button.Inner>
    </Button.Outer>
  )
}

export default Navigation
