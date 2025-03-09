'use client';
import Configuration from '../components/configuration/Configuration';
import { VehicleOverview } from '../components/overview/VehicleOverview';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import {
  desktopGridArea,
  landscapeGridArea,
  mobileGridArea,
} from './GridAreas';

const StyledAppWrapper = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  margin: auto;
  background-image: ${({ theme }) =>
    `linear-gradient(to right, ${theme.color.background}, ${theme.color.primary} 40%, ${theme.color.emphasis} 800px)`};
  background-size: 100% 100%;
  background-position: 50% 100%;
  background-repeat: no-repeat;
  color: white;
  ${mobileGridArea} @media (orientation: landscape) {
    ${landscapeGridArea};
  }

  @media (min-width: 960px) {
    ${desktopGridArea};
  }
`;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <StyledAppWrapper>
        <VehicleOverview />

        <Configuration />
      </StyledAppWrapper>
    </ThemeProvider>
  );
}
