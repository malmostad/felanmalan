import { useContext } from 'react'
import { Button } from '../buttons/Buttons'
import { NavigationContext } from '../../contexts/NavigationContext'

const Navigation = () => {
  const { state, dispatch } = useContext(NavigationContext)
  const {
    disableNext,
    currentViewIndex,
    lastViewIndex,
    disableSubmit,
    submitViewIndex,
    disablePrevious,
  } = state

  return (
    <Button.Outer>
      <Button.Inner>
        {!(currentViewIndex === submitViewIndex || disableNext) && (
          <Button
            onClick={() => {
              dispatch({ type: 'next' })
            }}>
            Next
          </Button>
        )}
        {currentViewIndex === submitViewIndex && !disableSubmit && (
          <Button
            onClick={() => {
              dispatch({ type: 'submit' })
            }}>
            Submit
          </Button>
        )}
        {currentViewIndex === lastViewIndex && (
          <Button
            onClick={() => {
              dispatch({ type: 'reset' })
            }}>
            Skapa Ny
          </Button>
        )}
        {!(currentViewIndex === 0 || disablePrevious) && (
          <Button
            onClick={() => {
              dispatch({ type: 'previous' })
            }}>
            Previous
          </Button>
        )}
      </Button.Inner>
    </Button.Outer>
  )
}

export default Navigation
