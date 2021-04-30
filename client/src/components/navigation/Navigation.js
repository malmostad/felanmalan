import { useContext } from 'react'
import { NavigationContext } from '../../contexts/NavigationContext'
import { useReport } from '../../contexts/ReportContext'
import {
  StyledButtonSkip,
  StyledButton,
  StyledOutlineButtonGreen,
  StyledOutlineButtonWhite,
} from '../styles/buttons/Buttons'
import { StyledButtonOuter, StyledButtonInner } from '../../components/styles/containers/Containers'

const Navigation = () => {
  const { dispatch: reportDispatch } = useReport()
  const { state, dispatch: navigationDispatch } = useContext(NavigationContext)
  const {
    disableNext,
    currentViewIndex,
    lastViewIndex,
    disableSubmit,
    submitViewIndex,
    disablePrevious,
  } = state

  return (
    <>
      <StyledButtonOuter>
        <StyledButtonInner>
          {currentViewIndex === 0 && (
            <StyledButtonSkip
              onClick={() => {
                navigationDispatch({ type: 'next' })
              }}>
              Hoppa över
            </StyledButtonSkip>
          )}
          {!(currentViewIndex === submitViewIndex || disableNext) && (
            <StyledButton
              onClick={() => {
                navigationDispatch({ type: 'next' })
              }}>
              Nästa steg
            </StyledButton>
          )}
          {currentViewIndex === submitViewIndex && !disableSubmit && (
            <StyledButton
              onClick={() => {
                navigationDispatch({ type: 'submit' })
              }}>
              Skicka in
            </StyledButton>
          )}
          {currentViewIndex === lastViewIndex && (
            <StyledButtonOuter green>
              <StyledOutlineButtonWhite
                onClick={() => {
                  reportDispatch({ type: 'clearFormInfo' })
                  navigationDispatch({ type: 'reset' })
                }}>
                Skapa Ny
              </StyledOutlineButtonWhite>
            </StyledButtonOuter>
          )}
          {!(currentViewIndex === 0 || disablePrevious) && (
            <StyledOutlineButtonGreen
              onClick={() => {
                navigationDispatch({ type: 'previous' })
              }}>
              Tillbaka
            </StyledOutlineButtonGreen>
          )}
        </StyledButtonInner>
      </StyledButtonOuter>
    </>
  )
}

export default Navigation
