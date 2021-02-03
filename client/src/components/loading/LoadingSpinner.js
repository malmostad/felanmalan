import { StyledLoadingContainer } from '../container/style/Container'
import { StyledLoadingSpinner } from './styles/LoadingSpinner'

export const LoadingContainer = ({ Children, ...restProps }) => (
  <StyledLoadingContainer {...restProps}>{Children}</StyledLoadingContainer>
)

LoadingContainer.LoadingSpinner = ({ ...restProps }) => (
  <StyledLoadingSpinner {...restProps} />
)
