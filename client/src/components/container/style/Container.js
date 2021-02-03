import styled from 'styled-components/macro'

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ light, theme }) =>
    light ? 'white' : theme.colors.PrimaryGreen};
`

export const StyledButtonContainer = styled(StyledContainer)`
  height: 100px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledLoadingContainer = styled(StyledContainer)`
  background-color: #ffffff;
`

export const StyledLandingContainer = styled(StyledContainer)`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

export const StyledInnerWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
`

export const StyledHeadSection = styled.div`
  width: 100%;
  background-color: #037540;
  height: auto;
  min-height: 270px;
  display: flex;
`

export const StyledHeadInner = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: left;
  align-self: flex-end;
`
