import { Button, Container } from './style/Buttons';

export const ButtonContainer = ({children, ...restProps}) => (
    <Container {...restProps}>{children}</Container>
);

ButtonContainer.Button = ({ children, ...restProps}) => (
    <Button {...restProps}>{children}</Button>
);

