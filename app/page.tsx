'use client';
import Configuration from '../components/configuration/Configuration';
import { VehicleOverview } from '../components/overview/VehicleOverview';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <VehicleOverview />
      <Configuration />
    </ThemeProvider>
  );
}
