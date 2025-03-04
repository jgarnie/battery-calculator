import React from 'react';
import { useVehicleSelectionContext } from '../../app/contexts/VehicleSelectionContext';

const VehicleEfficiency = () => {
  const { selectedVehicle } = useVehicleSelectionContext();
  return <div>{selectedVehicle?.fullRange}</div>;
};

export default VehicleEfficiency;
