import styled from 'styled-components/macro'

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme, bgGreen }) => (bgGreen ? theme.colors.PrimaryGreen : 'inherit')};
  font-size: ${({ theme }) => theme.FontSizes.ButtonText};
  margin: 0 10px;
  max-width: 380px;
  height: 50px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.PrimaryWhite};
  width: 270px;
  background: #076339;
  border-radius: 2px;
  border: 2px solid #193f2d;
  justify-content: center;
  align-items: center;
  color: white;

  &:hover {
    filter: brightness(150%);
    color: black;
  }
`

export const StyledFetchButton = styled.button`
  appearance: none;
  outline: none;
  background-size: 20px;
  background-color: #046a38;
  background-position: 19px;
  border: none;
  border-radius: 31px;
  margin: 10px;
  background-repeat: no-repeat;
  z-index: 98;
  position: absolute;
  width: 62px;
  height: 62px;
  bottom: 400px;
  right: 5px;
  cursor: pointer;
`

export const StyledCookieButton = styled(StyledButton)`
  margin: 0 auto 40px auto;
  color: white;
  max-width: 500px;
`
export const StyledReadMoreButton = styled(StyledButton)`
  margin: 10px auto;
  color: white;
  max-width: 100px;
  border: none;
  font-weight: 100;
  &:hover {
    filter: brightness(100%);
    text-decoration: underline;
    color: white;
  }
`
