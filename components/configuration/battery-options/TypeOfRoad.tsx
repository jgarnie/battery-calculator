import React from 'react';
import { OptionsSelection } from '../options-selection/OptionsSelection';
import { useVehicleSelectionContext } from '../../../app/contexts/VehicleSelectionContext';
import { Label } from '../../ui/Label';
import styled from 'styled-components';
import { StyledSectionWrapper } from '../../utils';

const StyledTypeOfRoad = styled.div`
  grid-area: roadType;
  width: 100%;
  height: 100%;
`;

export const TypeOfRoad = () => {
  const { selectedVehicle } = useVehicleSelectionContext();

  if (!selectedVehicle) return;

  const {
    typeOfRoad: { city, highway, outsideCity },
  } = selectedVehicle;

  const roadTypeData = [
    {
      label: 'Highway',
      value: highway,
    },
    {
      label: 'Secondary',
      value: outsideCity,
    },
    {
      label: 'City',
      value: city,
    },
  ];

  return (
    <StyledTypeOfRoad>
      <StyledSectionWrapper>
        <Label label={'Type Of Road'} />
        <OptionsSelection data={roadTypeData} type={'typeOfRoad'} />
      </StyledSectionWrapper>
    </StyledTypeOfRoad>
  );
};
