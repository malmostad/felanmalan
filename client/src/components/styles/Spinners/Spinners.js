import styled, { keyframes } from "styled-components/macro";

export const StyledLoadingSpinner = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 8px solid ${({ theme }) => theme.colors.PrimaryGreen};
  border-top: 8px solid ${({ theme }) => theme.colors.SecondaryGreen};
  margin-bottom: 8rem;
`;
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const LoadingSpinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid white;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  border-left: 2px solid #046a38;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: auto;
`;
