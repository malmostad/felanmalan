import { StyledButton} from "../styles/buttons/Buttons"
import {StyledButtonOuter, StyledButtonInner } from "../styles/containers/Containers"

export const Button = ({ children, ...restProps }) => (
  <StyledButton {...restProps}>{children}</StyledButton>
)

Button.Outer = ({ children, ...restProps }) => (
  <StyledButtonOuter {...restProps}>{children}</StyledButtonOuter>
)

Button.Inner= ({ children, ...restProps }) => (
  <StyledButtonInner {...restProps}>{children}</StyledButtonInner>
)
