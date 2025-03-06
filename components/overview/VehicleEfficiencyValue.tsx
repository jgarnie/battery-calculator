import React from 'react';
import { useVehicleSelectionContext } from '../../app/contexts/VehicleSelectionContext';

const VehicleEfficiency = () => {
  const { range } = useVehicleSelectionContext();
  return <div>{range}</div>;
};

export default VehicleEfficiency;
