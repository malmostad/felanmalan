import {
  LoadingContainer,
  LandingContainer,
  StyledWrapper,
} from './style/Container'

export const LandingWrapper = ({ children, ...restProps }) => (
  <LandingContainer {...restProps}>{children}</LandingContainer>
)

export const _LoadingContainer = ({ children, ...restProps }) => (
  <LoadingContainer {...restProps}>{children}</LoadingContainer>
)

export const StyledContainer = ({ children, ...restProps }) => (
  <StyledWrapper {...restProps}>{children}</StyledWrapper>
)
