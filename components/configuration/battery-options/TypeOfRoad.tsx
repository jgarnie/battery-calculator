import React from 'react';
import { OptionsSelection } from '../options-selection/OptionsSelection';
import { useVehicleSelectionContext } from '../../../app/contexts/VehicleSelectionContext';

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
  return <OptionsSelection data={roadTypeData} type={'typeOfRoad'} />;
};
