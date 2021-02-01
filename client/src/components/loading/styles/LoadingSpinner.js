import styled from 'styled-components/macro';


export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 8px solid ${props => props.theme.colors.PrimaryGreen};
  border-top: 8px solid ${props => props.theme.colors.SecondaryGreen};
  margin-bottom: 8rem;
  animation: spin 2s linear infinite;
  
@keyframes spin {
  0% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
`





