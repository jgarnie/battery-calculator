import React from 'react';
import styled from 'styled-components';
import { Button } from '../../ui/button';
import { useVehicleSelectionContext } from '../../../app/contexts/VehicleSelectionContext';

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
  const {
    partOfYear: { autumn, summer, winter },
    fullRange,
  } = selectedVehicle;

  const handleClick = (seasonValue: number) => {
    handleEfficiencyValueChange({ partOfYear: seasonValue / fullRange });
  };

  return (
    <StyledConfortSelect>
      <StyledConfortButton onClick={() => handleClick(winter)}>
        wint
      </StyledConfortButton>
      <StyledConfortButton onClick={() => handleClick(summer)}>
        summe
      </StyledConfortButton>
      <StyledConfortButton onClick={() => handleClick(autumn)}>
        autum
      </StyledConfortButton>
    </StyledConfortSelect>
  );
};

export default SeasonSelect;
