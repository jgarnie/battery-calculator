import React from 'react';
import { OptionsSelection } from '../options-selection/OptionsSelection';
import { useVehicleSelectionContext } from '../../../app/contexts/VehicleSelectionContext';
import { Label } from '../../ui/Label';

export const TypeOfRoad = () => {
  const { selectedVehicle } = useVehicleSelectionContext();

  if (!selectedVehicle) return;

  const {
    typeOfRoad: { city, highway, outsideCity },
  } = selectedVehicle;

  const roadTypeData = [
    {
      label: 'City',
      value: city,
    },
    {
      label: 'Highway',
      value: highway,
    },
    {
      label: 'Secondary',
      value: outsideCity,
    },
  ];

  return (
    <>
      <Label label={'Type Of Road'} />
      <OptionsSelection data={roadTypeData} type={'typeOfRoad'} />
    </>
  );
};
