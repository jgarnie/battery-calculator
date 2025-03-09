import React from 'react';
import { OptionsSelection } from '../options-selection/OptionsSelection';
import { useVehicleSelectionContext } from '../../../app/contexts/VehicleSelectionContext';
import { Label } from '../../ui/Label';
import styled from 'styled-components';
import { StyledSectionWrapper } from '../../utils';

const StyledDrivingStyle = styled.div`
  grid-area: driveType;
  width: 100%;
  height: 100%;
`;

const DrivingStyle = () => {
  const { selectedVehicle } = useVehicleSelectionContext();

  if (!selectedVehicle) return;
  const {
    drivingStyle: { aggressive, normal, snail },
  } = selectedVehicle;

  const drivingStyleData = [
    {
      label: 'Aggressive',
      value: aggressive,
    },
    {
      label: 'Normal',
      value: normal,
    },
    {
      label: 'Eco',
      value: snail,
    },
  ];

  return (
    <StyledDrivingStyle>
      <StyledSectionWrapper>
        <Label label={'Driving Style'} />
        <OptionsSelection data={drivingStyleData} type={'drivingStyle'} />
      </StyledSectionWrapper>
    </StyledDrivingStyle>
  );
};

export default DrivingStyle;
