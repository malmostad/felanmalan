import { StyledFlexCenterColumn } from "../styles/containers/Containers";
import { StyledLoadingSpinner } from "../styles/Spinners/Spinners";
import styled from 'styled-components/macro'
import { breatheAnimation } from "../styles/animations/animations";

export const StyledLoadingContainer = styled(StyledFlexCenterColumn)`
  background-color: green;
`
export const StyledLoadingSpinnerBreathing = styled(StyledLoadingSpinner)`
  animation-name: ${breatheAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`