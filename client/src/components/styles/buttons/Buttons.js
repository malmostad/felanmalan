import styled from "styled-components/macro";

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.colors.White : theme.colors.PrimaryGreen};
  font-size: ${({ theme }) => theme.FontSizes.ButtonText};
  font-family: MyriadPro, Open sans, Verdana;
  font-weight: 700;
  margin: 0 10px;
  height: 50px;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.PrimaryGreen : theme.colors.White};
  border-radius: 2px;
  border: 2px solid ${({ theme }) => theme.colors.PrimaryGreen};
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 520px;
  @media (max-width: 560px) {
    height: 50px;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.Gray};
    border: 2px solid ${({ theme }) => theme.colors.Gray};
    color: ${({ theme }) => theme.colors.White};
  }
  &:hover:enabled {
    background-color: ${({ theme }) => theme.colors.PrimaryGreen};
    color: ${({ theme }) => theme.colors.White};
  }
`;

export const StyledButtonUploadImageView = styled(StyledButton)`
  border: 2px solid ${({ theme }) => theme.colors.PrimaryGreen};
  @media (max-width: 560px) {
    border: 2px solid ${({ theme }) => theme.colors.White};
  }
`;

export const StyledFetchButton = styled.button`
  appearance: none;
  outline: none;
  background-size: 20px;
  background-color: ${({ theme }) => theme.colors.PrimaryGreen};
  background-position: 19px;
  border: none;
  border-radius: 31px;
  margin: 10px;
  background-repeat: no-repeat;
  z-index: 98;
  position: absolute;
  width: 62px;
  height: 62px;
  bottom: 110px;
  right: 5px;
  cursor: pointer;
`;

export const StyledOutlineButtonWhite = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.White};
  background-color: ${({ theme }) => theme.colors.PrimaryGreen};
  border: 2px solid ${({ theme }) => theme.colors.White};

  &:hover {
    background-color: ${({ theme }) => theme.colors.White};
    color: ${({ theme }) => theme.colors.PrimaryGreen};
  }
`;
export const StyledOutlineButtonWhiteFirstPage = styled(StyledButton)`
  margin: 0 auto;
  width: 100%;
  max-width: 560px;
  color: ${({ theme }) => theme.colors.White};
  background-color: ${({ theme }) => theme.colors.PrimaryGreen};
  border: 2px solid ${({ theme }) => theme.colors.White};
  @media (max-width: 560px) {
    max-width: 485px;
    width: 83%;
  }
`;
export const StyledButtonAddImg = styled(StyledButton)`
  border: 2px solid ${({ theme }) => theme.colors.White};
  @media (min-width: 560px) {
    display: none;
  }
`;

export const StyledDropzoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 55vh;
`;

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
`;
