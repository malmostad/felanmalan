import styled from 'styled-components/macro'

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme, inverted }) =>
    inverted ? theme.colors.PrimaryGreen : 'transparent'};
  font-size: ${({ theme }) => theme.FontSizes.ButtonText};
  border: 2px solid white;
  border-radius: 2px;
  width: 100%;
  margin: 0 10px;
  max-width: 380px;
  height: 50px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.PrimaryWhite};
`

export const StyledButtonBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
