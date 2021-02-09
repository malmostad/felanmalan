import { StyledLoadingContainer, StyledLoadingSpinnerBreathing } from './styles'

export const Loading = ({ Children, ...restProps }) => (
  <StyledLoadingContainer {...restProps}>{Children}</StyledLoadingContainer>
)

Loading.Spinner = ({ ...restProps }) => <StyledLoadingSpinnerBreathing {...restProps} />
