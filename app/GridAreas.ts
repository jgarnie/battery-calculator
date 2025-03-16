import { css } from 'styled-components';

export const mobileGridArea = css`
  grid-template-areas:
    'select range'
    'image image'
    'seasonSelect seasonSelect'
    'roadType roadType'
    'driveType driveType'
    'cabin cabin'
    'temperature temperature';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(7, auto);
  gap: 15px 0px;
`;

export const desktopGridArea = css`
  grid-template-areas:
    'select . seasonSelect seasonSelect'
    'image image  roadType roadType'
    'image image  driveType driveType'
    'range range  cabin cabin'
    'range range temperature temperature';
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const landscapeGridArea = css`
  grid-template-areas:
    'select seasonSelect'
    'image roadType'
    'image driveType'
    'image cabin'
    'range temperature';
  gap: 0 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, auto);
`;
