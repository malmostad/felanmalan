import { Button, ButtonBox } from './style/Buttons';
import { ButtonContainer } from '../container/style/Container';

export const ButtonWrapper = ({ children, ...restProps }) => (
  <ButtonContainer {...restProps}>{children}</ButtonContainer>
);

ButtonWrapper.Button = ({ children, ...restProps }) => (
  <Button {...restProps}>{children}</Button>
);

ButtonWrapper.Container = ({children, ...restProps}) => (
  <ButtonBox {...restProps}>{children}</ButtonBox>
)