import styled from 'styled-components/macro'
import { flexCenterColumn, flexCenter } from '../mixins'

export const StyledFlexCenter = styled.div`
  ${flexCenter}
`

export const StyledFlexCenterColumn = styled.div`
  ${flexCenterColumn}
`
export const StyledOuter = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ bgWhite, bgSecondary, theme }) =>
    bgWhite
      ? theme.colors.White
      : bgSecondary
      ? theme.colors.SecondaryGreen
      : theme.colors.PrimaryGreen};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: visible;
`
// button containers
export const StyledButtonOuter = styled.div`
  ${flexCenterColumn}
  height: 100px;
  background-color: transparent;
`
export const StyledButtonInner = styled.div`
  ${flexCenterColumn}
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
`
// loading container

// ??
export const StyledCookieContainer = styled.div`
  flex-direction: column;
  justify-content: start;
  margin: 0 auto;
  max-width: 500px;
  margin-top: 100px;
`
export const StyledButtonContainer = styled.div`
  flex-direction: column;
  display: flex;
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
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
  z-index: 100;
  position: absolute;
  z-index: 1002;
  background-color: #037540;
`
export const StyledFullContainer = styled.div`
  position: absolute;
  z-index: 1001;
  background-color: #037540;
  height: 100%;
  width: 100%;
`

export const StyledFollowUpContainer = styled.div`
  max-width: 560px;
  margin: 0px auto;
  padding: 12px;
  flex-direction: column;
  background-color: #037540;
  color: white;
  font-size: 22px;
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
