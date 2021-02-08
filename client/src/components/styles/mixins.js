import { css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexCenterColumn = css`
  ${flexCenter}
  flex-direction: column;
`;
