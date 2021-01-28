import { StyledContainer } from './style/Container';

export const LandingContainer = ({ children, ...restProps }) => (
  <StyledContainer {...restProps}>{children}</StyledContainer>
);
