'use client';
import React from 'react';

import { VehicleSelect } from './Select';
import CarImage from './CarImage';
import VehicleEfficiency from './VehicleEfficiencyValue';

export const VehicleOverview = () => {
  return (
    <>
      <VehicleSelect />
      <CarImage />
      <VehicleEfficiency />
    </>
  );
};
