import { LandingContainer } from './style/Container';

export const LandingWrapper = ({ children, ...restProps }) => (
  <LandingContainer {...restProps}>{children}</LandingContainer>
);
