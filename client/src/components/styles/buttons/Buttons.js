import styled from 'styled-components/macro'

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme, bgGreen }) => (bgGreen ? theme.colors.PrimaryGreen : 'inherit')};
  font-size: ${({ theme }) => theme.FontSizes.ButtonText};
  border: 2px solid white;
  border-radius: 2px;
  width: 100%;
  margin: 0 10px;
  max-width: 380px;
  height: 50px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.PrimaryWhite};

  &:hover {
    filter: brightness(150%);
    color: white;
  }
`
export const StyledFetchButton = styled.button`
  appearance: none;
  outline: none;
  background-image: url('Current-location.svg');
  background-size: 20px;
  background-color: #046a38;
  background-position: 19px;
  border: none;
  border-radius: 31px;
  margin: 10px;
  background-repeat: no-repeat;
  z-index: 98;
  right: 0;
  position: absolute;
  width: 62px;
  height: 62px;
  bottom: 180px;
`
