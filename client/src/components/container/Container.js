import {
  StyledLandingContainer,
  StyledLoadingContainer,
  StyledContainer,
} from './style/Container'

export const LandingContainer = ({ children, ...restProps }) => (
  <StyledLandingContainer {...restProps}>{children}</StyledLandingContainer>
)

export const LoadingContainer = ({ children, ...restProps }) => (
  <StyledLoadingContainer {...restProps}>{children}</StyledLoadingContainer>
)

export const Wrapper = ({ children, ...restProps }) => (
  <StyledContainer {...restProps}>{children}</StyledContainer>
)
