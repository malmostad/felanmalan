import styled from 'styled-components/macro';

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.PrimaryGreen};
`;

export const ButtonContainer = styled(StyledContainer)`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingContainer = styled(StyledContainer)`
  background-color: #ffffff;
`;

