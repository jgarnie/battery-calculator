'use client';
import React from 'react';
import Configuration from './configuration/Configuration';
import { VehicleOverview } from './overview/VehicleOverview';
import { desktopGridArea, landscapeGridArea, mobileGridArea } from '../app/GridAreas';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../app/styles/theme';
import { TSetup } from '../lib/getSetup';
import { SetupContextWrapper } from '../app/contexts/SeupContext';
import { VehicleSelectionContextWrapper } from '../app/contexts/VehicleSelectionContext';

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
  ${mobileGridArea}

  @media (min-width: 800px) {
    ${desktopGridArea};
  }
  @media (orientation: landscape) {
    ${landscapeGridArea};
  }

  @media (min-width: 960px) {
    ${desktopGridArea};
  }
`;
const HomeComponent = ({ setupData }: { setupData: TSetup }) => {
  return (
    <ThemeProvider theme={theme}>
      <SetupContextWrapper setupData={setupData}>
        <VehicleSelectionContextWrapper>
          <StyledAppWrapper>
            <VehicleOverview />

            <Configuration />
          </StyledAppWrapper>
        </VehicleSelectionContextWrapper>
      </SetupContextWrapper>
    </ThemeProvider>
  );
};

export default HomeComponent;
