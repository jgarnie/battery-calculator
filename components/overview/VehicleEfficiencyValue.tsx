import React from 'react';
import { TVehicleDataTransformed } from '../../app/contexts/VehicleDataContext';

const VehicleEfficiency = ({
  vehicle,
}: {
  vehicle: TVehicleDataTransformed;
}) => {
  return <div>{vehicle.fullRange}</div>;
};

export default VehicleEfficiency;
