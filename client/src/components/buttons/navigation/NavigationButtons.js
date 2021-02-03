import { ButtonContainer } from '../index'
import { formViews } from '../../../views/index'
import { useEffect, useState } from 'react'
import { useUpdate } from '../../../contexts/UpdateContext'

const NavigationButtons = () => {
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
    <ButtonContainer>
      <ButtonContainer.InnerContainer>
        {!disabledNext && (
          <ButtonContainer.Button
            inverted
            onClick={!disabledNext ? handleClickNext : handleSubmit}
          >
            {!disabledNext ? 'Next' : 'Submit'}
          </ButtonContainer.Button>
        )}
        {!disabledPrevious && (
          <ButtonContainer.Button inverted onClick={handleClickPrevious}>
            Previous
          </ButtonContainer.Button>
        )}
      </ButtonContainer.InnerContainer>
    </ButtonContainer>
  )
}

export default NavigationButtons
