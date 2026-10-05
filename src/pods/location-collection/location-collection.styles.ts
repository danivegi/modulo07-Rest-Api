import { css } from '@emotion/css';

export const root = css`
  & > :nth-child(n + 2) {
    margin-top: 2rem;
  }
`;

export const pagination = css`
  display: flex;
  justify-content: center;
`;