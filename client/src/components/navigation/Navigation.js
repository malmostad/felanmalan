import { useContext } from 'react'
import { NavigationContext } from '../../contexts/NavigationContext'
import { useReport } from '../../contexts/ReportContext'
import { useUpdate } from '../../contexts/UpdateContext'
import {
  StyledButton,
  StyledOutlineButtonGreen,
  StyledOutlineButtonWhite,
  StyledOutlineButtonWhiteFirstPage,
} from '../styles/buttons/Buttons'
import {
  StyledButtonOuter,
  StyledButtonInner,
  StyledButtonOuterFirstPage,
} from '../../components/styles/containers/Containers'

const Navigation = () => {
  const { dispatch: reportDispatch } = useReport()
  const { setImagesToBeUploaded } = useUpdate()
  const { state, dispatch: navigationDispatch } = useContext(NavigationContext)
  const {
    disableNext,
    currentViewIndex,
    lastViewIndex,
    disableSubmit,
    submitViewIndex,
    disablePrevious,
    disableSkip,
  } = state

  return (
    <>
      <StyledButtonOuter>
        <StyledButtonInner>
          {currentViewIndex === 0 && !disableSkip && (
            <StyledButtonOuterFirstPage>
              <StyledOutlineButtonWhiteFirstPage
                onClick={() => {
                  navigationDispatch({ type: 'next' })
                  navigationDispatch({ type: 'enableNext' })
                }}>
                Hoppa över
              </StyledOutlineButtonWhiteFirstPage>
            </StyledButtonOuterFirstPage>
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
                  setImagesToBeUploaded([])
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
