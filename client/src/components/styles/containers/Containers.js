import styled from 'styled-components/macro'
import { flexCenterColumn, flexCenter } from '../mixins'

export const MainContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const StyledFlexCenter = styled.div`
  ${flexCenter}
`

export const StyledFlexCenterColumn = styled.div`
  ${flexCenterColumn}
`
export const StyledOuter = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
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
`
export const StyledOuterFollowUpView = styled(StyledOuter)`
  overflow-y: hidden;
  min-height: calc(100vh - 337px);
  @media (max-width: 560px) {
    min-height: calc(100vh - 268px);
  }
  @media (max-width: 560px) and (max-height: 568px) {
    min-height: calc(100vh - 266px);
  }
`

// button containers
export const StyledButtonOuter = styled.div`
  transition: transform 0.3s ease-out;
  display: flex;
  position: absolute;
  height: 70px;
  width: 100%;
  bottom: 0;
  right: 0;
  background-color: ${({ green, theme }) =>
    green ? theme.colors.PrimaryGreen : theme.colors.White};
`
export const StyledButtonOuterFirstPage = styled(StyledButtonOuter)`
  background-color: ${({ theme }) => theme.colors.PrimaryGreen};
  align-self: center;
  @media (min-width: 560px) {
    background-color: ${({ theme }) => theme.colors.White};
  }
`
export const StyledButtonOuterGreenBg = styled.div`
  transition: transform 0.3s ease-out;
  display: flex;
  position: absolute;
  height: 70px;
  width: 100%;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.PrimaryGreen};
`
export const StyledButtonInner = styled.div`
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  width: 100%;
  height: 100%;
  flex-direction: row-reverse;
`
export const StyledButtonInnerFirstPage = styled.div`
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  width: 100%;
  height: 100%;
  flex-direction: row-reverse;
  background-color: #037540;
`
// loading container

// ??
export const StyledCookieContainer = styled.div`
  flex-direction: column;
  justify-content: start;
  margin: 0 auto;
  max-width: 560px;
  @media (max-width: 560px) {
    padding: 15px;
  }
`
export const StyledButtonContainer = styled.div`
  flex-direction: column;
  display: flex;
  margin: 0 auto;
  margin-top: 1rem;
  width: 100%;
  height: 160px;
  justify-content: end;
  margin-bottom: 20px;
`
// inner for what?
export const StyledInnerWrapper = styled.div`
  ${flexCenterColumn}
`

export const StyledFooterContainer = styled.div`
  ${flexCenter}
  position: absolute;
  left: 0;
  bottom: 0;
  height: 80px;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 2300;
  overflow: hidden;
`
export const StyledFullContainer = styled.div`
  position: absolute;
  z-index: 1001;
  width: 100vw;
  background-color: #037540;
  display: flex;
  justify-content: center;
  align-items: center;
`

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
  height: 415px;
  @media (max-width: 560px) {
    height: auto;
    margin: 0 auto;
  }
`

export const StyledGrid = styled.div`
  max-width: 100vw;
  height: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-start: end;
  grid-gap: 10px;
  overflow-x: hidden;
  place-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
export const StyledSearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 20px;
  margin: 0 15px;
  z-index: 19;
`

export const StyledHeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.PrimaryGreen};
  display: flex;
  justify-content: center;
  text-align: left;
  align-content: center;
  height: auto;
  min-height: 270px;
  padding-bottom: 40px;
  margin-bottom: -0.1rem;
  @media (max-height: 620px) {
    min-height: 230px;
  }
`
export const StyledHeaderContainerText = styled.div`
  max-width: 560px;
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
`
export const StyledHeroContainer = styled.div`
  padding-top: 90px;
  @media (max-width: 560px) {
    padding-top: 33px;
    padding-left: 12px;
    padding-right: 12px;
    width: 100%;
    margin: 0 auto;
    max-width: 296px;
  }
`

export const StyledTable = styled.div`
  width: fit-content;
  padding-bottom: 2rem;
  display: flex;

  @media (min-width: 560px) {
    margin: auto;
    overflow: hidden;
    align-content: space-evenly;
  }
`
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
`

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  @media (min-width: 560px) {
    flex-wrap: wrap;
    margin-bottom: 40px;
  }
`
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
`

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
`
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
`

export const StyledAddImage = styled.div`
  margin-top: 10px;
  color: yellow;
  width: 250px;
  height: 250px;
  @media (max-height: 595px) {
    width: 210px;
    height: 210px;
  }
`
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
`
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
`

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
`
export const StyledAddImages = styled.div`
  padding-top: 10px;
  padding-right: 10px;
  object-fit: cover;
  width: 250px;
  height: 250px;
  border: 1px solid black;
  @media (max-height: 595px) {
    width: 210px;
    height: 210px;
  }
`

export const StyledUploadContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 230px);
  background-color: ${({ theme }) => theme.colors.PrimaryGreen};
  @media (min-width: 560px) {
    background-color: ${({ theme }) => theme.colors.White};
    height: calc(100vh - 360px);
  }
`
export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
`
