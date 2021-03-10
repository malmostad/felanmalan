import { StyledFlexCenterColumn } from '../styles/containers/Containers'
import { StyledLoadingSpinner } from '../styles/Spinners/Spinners'
import styled, { keyframes } from 'styled-components/macro'
import { breatheAnimation } from '../styles/animations/animations'

export const StyledLoadingContainer = styled(StyledFlexCenterColumn)`
  background-color: green;
`
export const StyledLoadingSpinnerBreathing = styled(StyledLoadingSpinner)`
  animation-name: ${breatheAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoadingSpinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`
