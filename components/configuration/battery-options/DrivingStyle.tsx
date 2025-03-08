import React from 'react';
import { OptionsSelection } from '../options-selection/OptionsSelection';
import { useVehicleSelectionContext } from '../../../app/contexts/VehicleSelectionContext';
import { Label } from '../../ui/Label';

const DrivingStyle = () => {
  const { selectedVehicle } = useVehicleSelectionContext();

  if (!selectedVehicle) return;
  const {
    drivingStyle: { aggressive, normal, snail },
  } = selectedVehicle;

  const drivingStyleData = [
    {
      label: 'Agressive',
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
    <>
      <Label label={'Driving Style'} />
      <OptionsSelection data={drivingStyleData} type={'drivingStyle'} />
    </>
  );
};

export default DrivingStyle;
