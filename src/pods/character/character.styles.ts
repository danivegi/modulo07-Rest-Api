import { css } from '@emotion/css';
import { theme } from '#core/theme';

export const root = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

export const card = css`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${theme.breakpoints.values.md}px) {
    flex-direction: row;
  }
`;

export const image = css`
  max-width: 300px;
`;