'use client';
import Configuration from '../components/configuration/Configuration';
import { VehicleOverview } from '../components/overview/VehicleOverview';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const StyledAppWrapper = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: space-evenly;
  max-height: 100vh;

  @media (orientation: landscape) {
    flex-direction: row;
  }
  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const StyledCockpit = styled.div`
  width: 100%;
  padding: 10px;
  @media (min-width: 960px) {
    flex-direction: row;
    width: 35%;
  }
`;
const StyledVehicleOverview = styled.div`
  width: 100%;
  padding: 10px;
  @media (min-width: 960px) {
    flex-direction: row;
    width: 60%;
  }
`;
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <StyledAppWrapper>
        <StyledVehicleOverview>
          <VehicleOverview />
        </StyledVehicleOverview>
        <StyledCockpit>
          <Configuration />
        </StyledCockpit>
      </StyledAppWrapper>
    </ThemeProvider>
  );
}
