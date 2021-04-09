import styled from 'styled-components/macro'

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme, bgGreen }) => (bgGreen ? theme.colors.PrimaryGreen : 'inherit')};
  font-size: ${({ theme }) => theme.FontSizes.ButtonText};
  margin: 0 10px;
  max-width: 380px;
  height: 55px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.PrimaryWhite};
  width: 270px;
  background: ${({ theme }) => theme.colors.PrimaryGreen};
  border-radius: 2px;
  border: 2px solid ${({ theme }) => theme.colors.PrimaryGreen};
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'MyriadPro';
  font-weight: bold;
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
  bottom: 100px;
  right: 5px;
  cursor: pointer;
`
export const StyledZoomButtons = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 30px;
  right: 30px;
  border: 0;
`
export const StyledZoomInButton = styled.button`
  width: 25px;
  height: 33px;
  font-size: 21px;
  border: 0.1px solid #00000045;
  border-radius: 7px 7px 0px 0px;
`

export const StyledZoomOutButton = styled(StyledZoomInButton)`
  border-radius: 0px 0px 7px 7px;
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
