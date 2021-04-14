import { useContext, useState, useEffect } from 'react'
import { NavigationContext } from '../../contexts/NavigationContext'
import { useReport } from '../../contexts/ReportContext'
import {
  StyledButton,
  StyledOutlineButtonGreen,
  StyledOutlineButtonWhite,
} from '../styles/buttons/Buttons'
import {
  StyledFullContainer,
  StyledButtonOuter,
  StyledButtonInner,
  StyledButtonOuterGreenBg,
} from '../../components/styles/containers/Containers'

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
    <>
      <StyledButtonOuter>
        <StyledButtonInner>
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
            <StyledButtonOuter green>
              <StyledOutlineButtonWhite
                onClick={() => {
                  reportDispatch({ type: 'clearFormInfo' })
                  dispatch({ type: 'reset' })
                }}>
                Skapa Ny
              </StyledOutlineButtonWhite>
            </StyledButtonOuter>
          )}
          {!(currentViewIndex === 0 || disablePrevious) && (
            <StyledOutlineButtonGreen
              onClick={() => {
                dispatch({ type: 'previous' })
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
