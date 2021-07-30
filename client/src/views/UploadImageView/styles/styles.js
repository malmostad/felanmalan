import styled from "styled-components";

const StyledImageContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 100%;

  opacity: ${({ progress }) => progress};
  img {
    object-fit: contain;
    width: 230px;
    height: 230px;
  }
`;
const StyledImageOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: inherit;
  width: inherit;
`;
const StyledImageIcon = styled.div`
  color: red;
  font-size: 24px;
  position: absolute;
  bottom: 0;
  right: 10%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  cursor: pointer;
`;
export const Dropzone = styled.div`
  font-family: MyriadPro, Open sans, Verdana;
  width: 100%;
  max-width: 520px;
  height: 230px;
  margin: 50px auto;
  color: ${({ theme }) => theme.colors.PrimaryGreen};
  cursor: pointer;
  border: none;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.15),
    inset 0 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  @media (max-width: 560px) {
    display: none;
  }
`;
export const RemoveImg = styled.div`
  width: 52px;
  height: 52px;
  background-color: ${({ theme }) => theme.colors.PrimaryGreen};
  color: ${({ theme }) => theme.colors.White};
  float: left;
  position: absolute;
  bottom: 0;
  right: -10px;
  cursor: pointer;
  /* @media (min-width: 560px) {
    display: none;
  } */
`;

export { StyledImageContainer, StyledImageOverlay, StyledImageIcon };
