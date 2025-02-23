'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TVehicleDataTransformed } from './VehicleDataContext';

type VehicleSelectionContextValue = {
  selectedVehicle: TVehicleDataTransformed | undefined;
  setSelectedVehicle: React.Dispatch<
    React.SetStateAction<TVehicleDataTransformed | undefined>
  >;
};

const VehicleSelectionContext = createContext<
  VehicleSelectionContextValue | undefined
>(undefined);

export function VehicleSelectionContextWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedVehicle, setSelectedVehicle] =
    useState<TVehicleDataTransformed>();

  return (
    <VehicleSelectionContext.Provider
      value={{
        selectedVehicle,
        setSelectedVehicle,
      }}
    >
      {children}
    </VehicleSelectionContext.Provider>
  );
}

export function useVehicleSelectionContext() {
  const context = useContext(VehicleSelectionContext);
  if (!context) {
    throw new Error(
      'useVehicleDataContext must be used within a VehicleDataContext.provider'
    );
  }
  return context;
}
