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
export const StyledZoomButtons = styled.div`
  box-shadow: 0 0 0 1.5px rgb(0 0 0 / 10%);
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 45px;
  right: 30px;
  border: 0;
  border-radius: 4px;
  background: #fff;
`
export const StyledZoomButton = styled.button`
  font-size: 21px;
  background-color: initial;
  width: 29px;
  height: 29px;
  display: block;
  outline: none;
  border: 0;
  box-sizing: border-box;
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
`
export const StyledZoomInIcon = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' xmlns='http://www.w3.org/2000/svg' fill='%23333'%3E%3Cpath d='M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z'/%3E%3C/svg%3E");
`
export const StyledZoomOutIcon = styled(StyledZoomInIcon)`
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' xmlns='http://www.w3.org/2000/svg' fill='%23333'%3E%3Cpath d='M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z'/%3E%3C/svg%3E");
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
  font-family: 'MyriadPro';
  font-weight: lighter;
  -moz-osx-font-smoothing: grayscale;
  &:hover {
    filter: brightness(100%);
    text-decoration: underline;
    color: white;
  }
`
