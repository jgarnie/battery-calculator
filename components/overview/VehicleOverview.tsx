'use client';
import React from 'react';

import { VehicleSelect } from './Select';
import { useVehicleSelectionContext } from '../../app/contexts/VehicleSelectionContext';

export const VehicleOverview = () => {
  const { selectedVehicle } = useVehicleSelectionContext();
  return selectedVehicle ? <VehicleSelect /> : <p>loading</p>;
};
