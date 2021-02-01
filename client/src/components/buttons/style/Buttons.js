import styled from 'styled-components/macro'

export const Button = styled.button`
  cursor: pointer;
  background-color: ${(props) =>
    props.inverted ? props.theme.colors.PrimaryGreen : 'transparent'};
  font-size: ${(props) => props.theme.FontSizes.ButtonText};
  border: 2px solid white;
  border-radius: 2px;
  width: 100%;
  margin: 0 10px;
  max-width: 380px;
  height: 50px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.PrimaryWhite};

  &:first-of-type {
    border: none;

    &:hover {
      color: red;
    }
  }
`

export const ButtonBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
