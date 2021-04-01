import { useContext } from 'react'
import { Button } from '../buttons/Buttons'
import { NavigationContext } from '../../contexts/NavigationContext'
import { StyledButton } from '../styles/buttons/Buttons'

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
          <StyledButton
            onClick={() => {
              dispatch({ type: 'next' })
            }}>
            Nästa steg
          </StyledButton>
        )}
        {currentViewIndex === submitViewIndex && !disableSubmit && (
          <StyledButton
            onClick={() => {
              dispatch({ type: 'submit' })
            }}>
            Skicka in
          </StyledButton>
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
            Tillbaka
          </Button>
        )}
      </Button.Inner>
    </Button.Outer>
  )
}

export default Navigation
