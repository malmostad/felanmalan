import styled from "styled-components/macro";

const onResize = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--app-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", onResize);
onResize();

export const MainContainer = styled.div`
  display: flex;
  height: var(--app-height);
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ currentViewIndex, lastViewIndex, theme }) =>
    currentViewIndex === lastViewIndex
      ? theme.colors.PrimaryGreen
      : theme.colors.White};
`;

export const StyledFlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledOuter = styled.div`
  width: 100vw;
  height: var(--app-height);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
  background-color: ${({ bgWhite, bgSecondary, theme }) =>
    bgWhite
      ? theme.colors.White
      : bgSecondary
      ? theme.colors.SecondaryGreen
      : theme.colors.PrimaryGreen};
`;
export const StyledOuterFollowUpView = styled(StyledOuter)`
  overflow-y: hidden;
  min-height: calc(100vh - 398px);
  @media (max-width: 560px) {
    min-height: calc(100vh - 352px);
  }
  @media (max-width: 560px) and (max-height: 620px) {
    min-height: calc(100vh - 315px);
  }
`;
// button containers
export const StyledButtonOuter = styled.div`
  transition: transform 0.3s ease-out;
  display: flex;
  background-color: ${({
    windowWidth,
    currentViewIndex,
    lastViewIndex,
    formState,
    theme,
  }) =>
    (windowWidth < 560 && currentViewIndex === 0) ||
    currentViewIndex === lastViewIndex
      ? theme.colors.PrimaryGreen
      : theme.colors.White};
  background-color: ${({ formState, theme }) =>
    formState > 0 && theme.colors.White};
  background-color: ${({ currentViewIndex, lastViewIndex, theme }) =>
    currentViewIndex === lastViewIndex && theme.colors.PrimaryGreen};
`;
export const StyledButtonInner = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 16px 0px;
  width: 100%;
  height: 100%;
  flex-direction: row-reverse;
  max-width: 560px;
`;

export const StyledCookieContainer = styled.div`
  flex-direction: column;
  justify-content: start;
  margin: 0 auto;
  max-width: 560px;
  @media (max-width: 560px) {
    padding: 15px;
  }
`;
export const StyledButtonContainer = styled.div`
  flex-direction: column;
  display: flex;
  margin: 0 auto;
  margin-top: 1rem;
  width: 100%;
  height: 160px;
  justify-content: end;
  margin-bottom: 20px;
`;

export const StyledContentFollowUpView = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  max-width: 560px;
  margin: 0px auto;
  flex-direction: column;
  align-items: center;
  background-color: #037540;
  color: white;
  font-size: 22px;
  z-index: 50;
  height: 220px;
  align-self: center;
  justify-content: center;
  @media (max-width: 560px) {
    margin: 0 auto;
  }
`;

export const StyledHeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.PrimaryGreen};
  display: flex;
  justify-content: center;
  text-align: left;
  align-content: center;
  height: auto;
  min-height: 270px;
  @media (max-height: 620px) {
    min-height: 225px;
  }
`;
export const StyledHeaderContainerText = styled.div`
  max-width: 560px;
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
`;
export const StyledHeroContainer = styled.div`
  padding-top: 60px;
  @media (max-width: 560px) {
    padding-top: 33px;
    padding-left: 12px;
    padding-right: 12px;
    width: 100%;
    margin: 0 auto;
    max-width: 296px;
  }
`;

export const StyledTable = styled.div`
  width: fit-content;
  padding-bottom: 2rem;
  display: flex;

  @media (min-width: 560px) {
    margin: auto;
    overflow: hidden;
    align-content: space-evenly;
  }
`;
export const StyledFlexTheContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  @media (min-width: 560px) {
    max-width: 520px;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
    justify-content: center;
    margin-right: 0;
  }
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  @media (min-width: 560px) {
    flex-wrap: wrap;
    margin-bottom: 40px;
  }
`;
export const StyledCell = styled.img`
  width: 250px;
  max-height: 250px;
  min-height: 250px;
  display: flex;
  object-fit: cover;
  margin: 0 10px;
  @media (max-height: 595px) {
    width: 210px;
    max-height: 210px;
    min-height: 210px;
  }
`;

export const StyledCellUpload = styled.div`
  width: 250px;
  max-height: 250px;
  min-height: 250px;
  display: flex;
  margin: 0 10px;
  position: absolute;
  top: 0;
  background-color: rgba(255, 255, 255, 0.5);
  @media (max-height: 595px) {
    width: 210px;
    max-height: 210px;
    min-height: 210px;
  }
`;
export const StyledImagesSize = styled.div`
  max-width: 250px;
  min-width: 250px;
  margin-top: 10px;
  margin-right: 10px;
  position: relative;
  @media (max-height: 595px) {
    max-height: 210px;
    min-height: 210px;
    max-width: 210px;
    min-width: 210px;
  }
`;

export const StyledAddImage = styled.div`
  margin-top: 10px;
  color: yellow;
  width: 250px;
  height: 250px;
  margin-right: 10px;
  @media (max-height: 595px) {
    width: 210px;
    height: 210px;
  }
`;
export const StyledButtonImage = styled.button`
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  justify-content: center;
  align-items: center;
  background-color: #d5d5d5;
  width: 100%;
  height: 100%;
  margin: 0 10px;
  cursor: pointer;
  box-sizing: content-box;
  &:hover {
    background-color: #a6a6a6;
  }
`;
export const StyledTouchCharter = styled.div`
  overflow-y: hidden;
  overflow-x: auto;
  width: 100%;
  background: transparent;
  top: 0;
  left: 0;
  height: 58vh;
  padding-top: 12px;
  @media (min-width: 560px) {
    overflow: revert;
    height: 58vh;
    padding-bottom: 22px;
  }
`;

export const StyledImg = styled.img`
  padding-top: 10px;
  padding-right: 10px;
  object-fit: cover;
  width: 250px;
  height: 250px;
  @media (max-height: 595px) {
    width: 210px;
    height: 210px;
  }
`;

export const StyledUploadContainer = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.PrimaryGreen};
  @media (min-width: 560px) {
    background-color: ${({ theme }) => theme.colors.White};
    height: calc(100vh - 360px);
  }
`;
export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
