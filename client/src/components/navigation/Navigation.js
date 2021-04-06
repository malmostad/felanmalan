import { useContext } from 'react'
import { Button } from '../buttons/Buttons'
import { NavigationContext } from '../../contexts/NavigationContext'
import { useReport } from '../../contexts/ReportContext'
import {
  StyledButton,
  StyledOutlineButtonGreen,
  StyledOutlineButtonWhite,
} from '../styles/buttons/Buttons'
import { StyledFullContainer } from '../../components/styles/containers/Containers'

const Navigation = () => {
  const { dispatch: reportDispatch } = useReport()
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
          <StyledFullContainer>
            <StyledOutlineButtonWhite
              onClick={() => {
                reportDispatch({ type: 'clearFormInfo' })
                dispatch({ type: 'reset' })
              }}>
              Skapa Ny
            </StyledOutlineButtonWhite>
          </StyledFullContainer>
        )}
        {!(currentViewIndex === 0 || disablePrevious) && (
          <StyledOutlineButtonGreen
            onClick={() => {
              dispatch({ type: 'previous' })
            }}>
            Tillbaka
          </StyledOutlineButtonGreen>
        )}
      </Button.Inner>
    </Button.Outer>
  )
}

export default Navigation
