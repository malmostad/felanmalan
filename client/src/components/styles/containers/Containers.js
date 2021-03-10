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
  height: 100vh;
  background-color: ${({ bgWhite, bgSecondary, theme }) =>
    bgWhite
      ? theme.colors.White
      : bgSecondary
      ? theme.colors.SecondaryGreen
      : theme.colors.PrimaryGreen};
  display: flex;
  justify-content: space-between;
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
`
// loading container

// ??
export const StyledLandingContainer = styled(StyledOuter)`
  ${flexCenterColumn}
  min-height: 100vh;
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
  height: 100px;
  width: 100%;
  /* background-color: ${({ theme }) => theme.colors.PrimaryGreen}; */
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
