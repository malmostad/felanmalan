import { StyledButton, StyledButtonBox } from './style/Buttons'
import { StyledButtonContainer } from '../container/style/Container'

export const ButtonContainer = ({ children, ...restProps }) => (
  <StyledButtonContainer {...restProps}>{children}</StyledButtonContainer>
)

ButtonContainer.Button = ({ children, ...restProps }) => (
  <StyledButton {...restProps}>{children}</StyledButton>
)

ButtonContainer.InnerContainer = ({ children, ...restProps }) => (
  <StyledButtonBox {...restProps}>{children}</StyledButtonBox>
)
