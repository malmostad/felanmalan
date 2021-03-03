import { useContext } from 'react'
import { Button } from '../buttons/Buttons'
import { NavigationContext } from '../../contexts/NavigationContext'

const Navigation = () => {
  const { state, dispatch } = useContext(NavigationContext)
  const { disableNext, currentViewIndex, lastViewIndex } = state

  return (
    <Button.Outer>
      <Button.Inner>
        {!(currentViewIndex === lastViewIndex || disableNext) && (
          <Button
            onClick={() => {
              dispatch({ type: 'next' })
            }}>
            Next
          </Button>
        )}
        {currentViewIndex === lastViewIndex && (
          <Button
            onClick={() => {
              dispatch({ type: 'submit' })
            }}>
            Submit
          </Button>
        )}
        {!(currentViewIndex === 0) && (
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
