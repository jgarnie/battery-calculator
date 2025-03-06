import React from 'react';
import { Slider } from '../../ui/slider';
import { useVehicleSelectionContext } from '../../../app/contexts/VehicleSelectionContext';

const Temperature = () => {
  const { handleEfficiencyValueChange } = useVehicleSelectionContext();

  const handleChange = (value: number[]) => {
    console.log(value);

    handleEfficiencyValueChange({ temperature: value[0] });
  };

  return (
    <Slider
      step={1}
      min={-10}
      max={40}
      onValueChange={handleChange}
      defaultValue={[20]}
    />
  );
};

export default Temperature;
