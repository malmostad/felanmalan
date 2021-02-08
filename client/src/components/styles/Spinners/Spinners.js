import styled from 'styled-components/macro';

export const StyledLoadingSpinner = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 8px solid ${({ theme }) => theme.colors.PrimaryGreen};
  border-top: 8px solid ${({ theme }) => theme.colors.SecondaryGreen};
  margin-bottom: 8rem;
`;
