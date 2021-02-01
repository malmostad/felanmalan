import { StyledContainer, LoadingContainer } from './style/Container';

export const LandingContainer = ({ children, ...restProps }) => (
  <StyledContainer {...restProps}>{children}</StyledContainer>
);


export const _LoadingContainer = ({ children, ...restProps }) => (
  <LoadingContainer {...restProps}>{children}</LoadingContainer>
);
