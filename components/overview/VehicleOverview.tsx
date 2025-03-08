'use client';
import React, { useState } from 'react';

import { VehicleSelect } from './Select';
import CarImage from './CarImage';
import VehicleEfficiency from './VehicleEfficiencyValue';
import { useVehicleSelectionContext } from '../../app/contexts/VehicleSelectionContext';

export const VehicleOverview = () => {
  const { selectedVehicle, handleSelectMultipleVehicles } =
    useVehicleSelectionContext();

  const handleAddVehicle = () => {
    const vehicleToadd = selectedVehicle[selectedVehicle.length - 1];
    handleSelectMultipleVehicles(vehicleToadd);
  };
  return (
    <>
      <button onClick={handleAddVehicle}>+</button>
      {selectedVehicle.length &&
        selectedVehicle.map((vehicle, index) => {
          const [vehicleToDisplay] = Object.entries(vehicle).map((val) => {
            const [a_, s] = val;
            return s;
          });
          return (
            <React.Fragment key={index}>
              <VehicleSelect vehicle={vehicleToDisplay} />
              <CarImage vehicle={vehicleToDisplay} />
              <VehicleEfficiency vehicle={vehicleToDisplay} />
            </React.Fragment>
          );
        })}
    </>
  );
};
