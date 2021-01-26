import { Button, Container } from './style/ButtonStyle';

export const ButtonContainer = ({children, ...restProps}) => (
    <Container {...restProps}>{children}</Container>
);

ButtonContainer.Content = ({ children, ...restProps}) => (
    <Button {...restProps}>{children}</Button>
);

