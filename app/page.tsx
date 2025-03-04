'use client';
import Configuration from '../components/configuration/Configuration';
import { VehicleOverview } from '../components/overview/VehicleOverview';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const StyledAppWrapper = styled.div`
  display: flex;
  height: 100vh;
  padding: 10px;
`;

const StyledCockpit = styled.div`
  width: 35%;
  padding: 10px;
`;
const StyledVehicleOverview = styled.div`
  width: 60%;
  padding: 10px;
`;
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <StyledAppWrapper>
        <StyledCockpit>
          <Configuration />
        </StyledCockpit>
        <StyledVehicleOverview>
          <VehicleOverview />
        </StyledVehicleOverview>
      </StyledAppWrapper>
    </ThemeProvider>
  );
}
