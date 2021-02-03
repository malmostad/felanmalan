import styled from 'styled-components/macro'
import { flexCenterColumn } from '../mixins'

export const StyledFlexCenterColumn = styled.div`
  ${flexCenterColumn}
`

export const StyledOuter = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ bgWhite, bgSecondary, theme }) =>
  bgWhite ? theme.colors.White : bgSecondary ? theme.colors.SecondaryGreen : theme.colors.PrimaryGreen };
  display: flex;
  justify-content: space-between;
`
//button containers
export const StyledButtonOuter= styled.div`
  ${flexCenterColumn}
  height: 100px;
  background-color: transparent;
`
export const StyledButtonInner = styled.div`
  ${flexCenterColumn}
  width: 100%;
  height: 100%;
`
//loading container


// ??
export const StyledLandingContainer = styled(StyledOuter)`
  ${flexCenterColumn}
  min-height: 100vh;
`

// inner for what?
export const StyledInnerWrapper = styled.div`
  ${flexCenterColumn}
  min-height: 100vh;
  background-color: transparent;
`


