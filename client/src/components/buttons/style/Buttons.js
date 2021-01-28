import styled from 'styled-components/macro';

export const Button = styled.button`
  background-color: transparent;
  font-size: ${props => props.theme.FontSizes.ButtonText};
  border: 2px solid white;
  border-radius: 2px;
  width: 100%;
  margin: 0 10px;
  max-width: 380px;
  height: 50px;
  color: ${props => props.theme.colors.PrimaryWhite};
`;


