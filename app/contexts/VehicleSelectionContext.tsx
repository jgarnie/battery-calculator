'use client';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import {
  TVehicleDataTransformed,
  useVehicleDataContext,
} from './VehicleDataContext';

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
  const { vehicleList } = useVehicleDataContext();

  useEffect(() => {
    setSelectedVehicle(vehicleList[0]);
  }, [vehicleList]);

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
