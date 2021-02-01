import { ButtonWrapper } from '../index'
import { formViews } from '../../../views/index'
import { useEffect } from 'react'
import { useState } from 'react'
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

  /*
  useEffect(() => {
    if(currentView && formViews.length) {

      if(currentView +1 >= formViews.length && currentView -1 >= 0){
        console.log(currentView)
      }
    }
    else alert("something is seriously wrong, maybe switch career?")
    

  }, [currentView]);

*/
  /*switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}  */

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
    <ButtonWrapper>
      <ButtonWrapper.Container>
        {!disabledNext && (
          <ButtonWrapper.Button
            inverted
            onClick={!disabledNext ? handleClickNext : handleSubmit}
          >
            {!disabledNext ? 'Next' : 'Submit'}
          </ButtonWrapper.Button>
        )}
        {!disabledPrevious && (
          <ButtonWrapper.Button inverted onClick={handleClickPrevious}>
            Previous
          </ButtonWrapper.Button>
        )}
      </ButtonWrapper.Container>
    </ButtonWrapper>
  )
}

export default NavigationButtons
