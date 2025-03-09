'use client';
import React from 'react';

import { VehicleSelect } from './Select';
import CarImage from './CarImage';
import VehicleRangeValue from './VehicleRangeValue';

export const VehicleOverview = () => {
  return (
    <>
      <VehicleSelect />

      <CarImage />

      <VehicleRangeValue />
    </>
  );
};
