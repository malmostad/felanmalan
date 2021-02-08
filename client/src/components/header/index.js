import { StyledHeaderOuter, StyledHeaderInner } from './styles';
import { StyledHeading } from '../styles/Typography/Typography';

export const Header = ({ children, ...restProps }) => (
  <StyledHeaderOuter {...restProps}>{children}</StyledHeaderOuter>
);

Header.Inner = ({ children, ...restProps }) => (
  <StyledHeaderInner {...restProps}>{children}</StyledHeaderInner>
);

Header.Title = ({ children, ...restProps }) => (
  <StyledHeading {...restProps}>{children}</StyledHeading>
);
