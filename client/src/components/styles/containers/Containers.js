import styled from 'styled-components/macro'
import { flexCenterColumn, flexCenter } from '../mixins'

export const MainContainer = styled.div`
  overflow: hidden;
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
  overflow: visible;
  background-color: ${({ bgWhite, bgSecondary, theme }) =>
    bgWhite
      ? theme.colors.White
      : bgSecondary
      ? theme.colors.SecondaryGreen
      : theme.colors.PrimaryGreen};
`
export const StyledOuterFollowUpView = styled(StyledOuter)`
  overflow-y: hidden;
  min-height: calc(100vh - 270px);
  @media (max-width: 560px) {
    min-height: calc(100vh - 270px);
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
  overflow: hidden;
  width: 100%;
  max-width: 560px;
  margin: 0px auto;
  flex-direction: column;
  background-color: #037540;
  color: white;
  font-size: 22px;
  z-index: 50;
  @media (max-width: 560px) {
    width: 300px;
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
  @media (max-width: 560px) {
    min-height: 280px;
  }
  @media (max-height: 620px) {
    min-height: 240px;
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
    max-width: 560px;
  }
`

export const StyledTable = styled.div`
  overflow-x: scroll;
  padding-bottom: 2rem;
  display: flex;
  width: 1000px;
  height: 100%;
  @media (min-width: 560px) {
    margin: auto;
    overflow-x: auto;
    width: 560px;
  }
`
export const StyledFlexTheContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  @media (min-width: 560px) {
    flex-wrap: wrap;
  }
`

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  @media (min-width: 560px) {
    flex-wrap: wrap;
  }
`

export const StyledCell = styled.img`
  box-shadow: 0 2px 10px rgb(96 96 96 / 18%);
  width: 250px;
  max-height: 250px;
  display: flex;
  padding-top: 10px;
  padding-right: 10px;
  object-fit: cover;
`
export const StyledImagesSize = styled.div`
  max-width: 250px;
  min-width: 250px;
  box-shadow: 0 2px 10px rgb(96 96 96 / 18%);
`

export const StyledAddImage = styled.div`
  margin-top: 10px;
  background: #f8f8fa;
  color: yellow;
  width: 250px;

  min-height: 250px;
`
export const StyledButtonImage = styled.button`
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  justify-content: center;
  align-items: center;
  background: #f8f8fa;
  width: 100%;
  height: 96%;
  margin: 0;
  cursor: pointer;
  &:hover {
    background: #e3e3e5;
  }
`
export const StyledTouchCharter = styled.div`
  overflow-y: hidden;
  overflow: scroll;
  width: 100%;
  background: transparent;
  top: 0;
  left: 0;
  @media (min-width: 560px) {
    overflow: hidden;
  }
`

export const StyledImg = styled.img`
  padding-top: 10px;
  padding-right: 10px;
  object-fit: cover;
  width: 250px;
  height: 250px;
`
export const StyledAddImages = styled.div`
  padding-top: 10px;
  padding-right: 10px;
  object-fit: cover;
  width: 250px;
  height: 250px;
  border: 1px solid black;
`
