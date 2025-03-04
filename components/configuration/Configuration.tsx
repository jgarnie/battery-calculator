import React from 'react';
import styled from 'styled-components';
import { useVehicleSelectionContext } from '../../app/contexts/VehicleSelectionContext';

import { useAppConfigurationContext } from '../../app/contexts/AppConfigurationContext';
import ComfortSelect from './battery-options/ComfortSelect';
import Temperature from './battery-options/Temperature';
import { TypeOfRoad } from './battery-options/TypeOfRoad';
import DrivingStyle from './battery-options/DrivingStyle';
import SeasonSelect from './battery-options/SeasonSelect';

const StyledConfigurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Configuration = () => {
  const { selectedVehicle } = useVehicleSelectionContext();
  const { appConfiguration } = useAppConfigurationContext();
  if (!selectedVehicle) return;

  return (
    <StyledConfigurationContainer>
      <ComfortSelect />
      <Temperature />
      <TypeOfRoad />
      <DrivingStyle />
      <SeasonSelect />
    </StyledConfigurationContainer>
  );
};

export default Configuration;
// {
//     "name": "Tesla Model 3",
//     "partOfYear": {
//     "summer": 500,
//     "autumn": 400,
//     "winter": 300
//     },
//     "typeOfRoad": {
//     "city": 500,
//     "outsideCity": 350,
//     "highway": 250
//     },
//     "drivingStyle": {
//     "snail": 500,
//     "normal": 400,
//     "aggressive": 200
//     },
//     "fullRange": 500,
//     "heatingConsumption": 50,
//     "coolingConsumption": 50
//     },
