import React from 'react';
import styled from 'styled-components';
import { Button } from '../../ui/button';
import { useVehicleSelectionContext } from '../../../app/contexts/VehicleSelectionContext';
import { TPartOfYear } from '../../../lib/getCarList';

const StyledConfortSelect = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const StyledConfortButton = styled(Button)`
  width: 40%;
`;

const SeasonSelect = () => {
  const { selectedVehicle, handleEfficiencyValueChange } =
    useVehicleSelectionContext();

  if (!selectedVehicle) return;

  const handleClick = (selectedSeason: keyof TPartOfYear) => {
    selectedVehicle.map((vehicleRecord) => {
      return Object.entries(vehicleRecord).map(([vehicleName, vehicle]) => {
        const vehicleRange = vehicle.fullRange;
        const seasonValue = vehicle.partOfYear[selectedSeason];
        return handleEfficiencyValueChange(vehicleName, {
          partOfYear: seasonValue / vehicleRange,
        });
      });
    });
  };

  return (
    <StyledConfortSelect>
      <StyledConfortButton onClick={() => handleClick('winter')}>
        wint
      </StyledConfortButton>
      <StyledConfortButton onClick={() => handleClick('summer')}>
        summe
      </StyledConfortButton>
      <StyledConfortButton onClick={() => handleClick('autumn')}>
        autum
      </StyledConfortButton>
    </StyledConfortSelect>
  );
};

export default SeasonSelect;
