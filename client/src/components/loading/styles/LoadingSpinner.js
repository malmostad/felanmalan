import { keyframes } from 'styled-components'
import styled from 'styled-components/macro'

const breatheAnimation = keyframes` 
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`

export const StyledLoadingSpinner = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 8px solid ${({ theme }) => theme.colors.PrimaryGreen};
  border-top: 8px solid ${({ theme }) => theme.colors.SecondaryGreen};
  margin-bottom: 8rem;
  animation-name: ${breatheAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`
