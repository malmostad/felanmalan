import styled from 'styled-components/macro'

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.PrimaryGreen};
`

export const ButtonContainer = styled(StyledContainer)`
  height: 100px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoadingContainer = styled(StyledContainer)`
  background-color: #ffffff;
`

export const LandingContainer = styled(StyledContainer)`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

export const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
`
