import styled from 'styled-components/macro'

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme, bgGreen }) => (bgGreen ? theme.colors.PrimaryGreen : 'inherit')};
  font-size: ${({ theme }) => theme.FontSizes.ButtonText};
  margin: 0 10px;
  max-width: 380px;
  height: 50px;
  color: ${({ theme }) => theme.colors.PrimaryWhite};
  width: 270px;
  background: ${({ theme }) => theme.colors.PrimaryGreen};
  border-radius: 2px;
  border: 2px solid ${({ theme }) => theme.colors.PrimaryGreen};
  justify-content: center;
  align-items: center;
  color: white;
  @media (max-width: 560px) {
    height: 50px;
    font-family: 'MyriadPro';
    font-weight: bold;
  }
`

export const StyledButtonSkip = styled(StyledButton)`
  margin: 0;
  max-width: 500px;
  width: 90%;
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
  bottom: 140px;
  right: 5px;
  cursor: pointer;
`

export const StyledOutlineButtonGreen = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.PrimaryGreen};
  background-color: ${({ theme }) => theme.colors.White};

  &:hover {
    background-color: ${({ theme }) => theme.colors.PrimaryGreen};
    color: ${({ theme }) => theme.colors.White};
  }
`

export const StyledOutlineButtonWhite = styled(StyledButton)`
  margin: 0 auto;
  width: 100%;
  color: ${({ theme }) => theme.colors.White};
  background-color: ${({ theme }) => theme.colors.PrimaryGreen};
  border: 2px solid ${({ theme }) => theme.colors.White};

  &:hover {
    background-color: ${({ theme }) => theme.colors.White};
    color: ${({ theme }) => theme.colors.PrimaryGreen};
  }
`
export const StyledOutlineButtonWhiteFirstPage = styled(StyledButton)`
  margin: 0 auto;
  max-width: 485px;
  width: 83%;
  color: ${({ theme }) => theme.colors.White};
  background-color: ${({ theme }) => theme.colors.PrimaryGreen};
  border: 2px solid ${({ theme }) => theme.colors.White};
`
export const StyledButtonAddImg = styled(StyledOutlineButtonWhite)`
  bottom: 90px;
  position: absolute;
  max-width: 485px;
  width: 83%;
  @media (min-width: 560px) {
    display: none;
  }
`

export const StyledReadMoreButton = styled(StyledButton)`
  margin: 10px auto;
  color: white;
  max-width: 100px;
  border: none;
  font-family: 'MyriadPro';
  font-weight: lighter;
  -moz-osx-font-smoothing: grayscale;
  &:hover {
    filter: brightness(100%);
    text-decoration: underline;
    color: white;
  }
`

export const StyledDropzoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 55vh;
`

export const StyledDropzone = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.PrimaryGreen};
  width: 100%;
  max-width: 560px;
  height: 100%;
  max-height: 230px;
  cursor: pointer;
  border-radius: 10px;
  -moz-box-shadow: inset 0 0 5px #000000;
  -webkit-box-shadow: inset 0 5px #000000;
  box-shadow: inset 0 0 5px #000000;
  @media (max-width: 560px) {
    display: none;
  }
`
