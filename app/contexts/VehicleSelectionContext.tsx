'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { TVehicleDataTransformed, useVehicleDataContext } from './VehicleDataContext';

type VehicleSelectionContextValue = {
  selectedVehicle: TVehicleDataTransformed | undefined;
  setSelectedVehicle: React.Dispatch<React.SetStateAction<TVehicleDataTransformed | undefined>>;
  handleEfficiencyValueChange: (value: Partial<Record<TCoefficientKey, number>>) => void;
  range: number;
};

export type TCoefficientKey = 'partOfYear' | 'typeOfRoad' | 'drivingStyle' | 'heatingConsumption' | 'temperature';

const VehicleSelectionContext = createContext<VehicleSelectionContextValue | undefined>(undefined);

export function VehicleSelectionContextWrapper({ children }: { children: ReactNode }) {
  const [selectedVehicle, setSelectedVehicle] = useState<TVehicleDataTransformed | undefined>(undefined);
  const [efficiencyValues, setEfficiencyValues] = useState<Partial<Record<TCoefficientKey, number>>>({});
  const [range, setRange] = useState(selectedVehicle?.fullRange || 500);
  const { vehicleList } = useVehicleDataContext();

  useEffect(() => {
    setSelectedVehicle(vehicleList[0]);
  }, [vehicleList]);

  const handleEfficiencyValueChange = (value: Partial<Record<TCoefficientKey, number>>) => {
    console.log(value);
    console.log('hi2');

    const coefficientState = { ...efficiencyValues, ...value };

    setEfficiencyValues(coefficientState);
  };

  useEffect(() => {
    const sanitizedValue = {
      drivingStyle: efficiencyValues.drivingStyle || 1,
      heatingConsumption: efficiencyValues.heatingConsumption || 0,
      typeOfRoad: efficiencyValues.typeOfRoad || 1,
      temperature: efficiencyValues.temperature || 0,
      fullRange: selectedVehicle?.fullRange || 500,
      partOfYear: efficiencyValues.partOfYear || 1,
    };
    console.log('hi');

    const bateryRange =
      sanitizedValue.fullRange * sanitizedValue.drivingStyle * sanitizedValue.partOfYear * sanitizedValue.typeOfRoad -
      sanitizedValue.temperature -
      sanitizedValue.heatingConsumption;
    setRange(Number(bateryRange.toFixed(0)));
  }, [efficiencyValues, selectedVehicle?.fullRange]);

  return (
    <VehicleSelectionContext.Provider
      value={{
        selectedVehicle,
        setSelectedVehicle,
        handleEfficiencyValueChange,
        range,
      }}
    >
      {children}
    </VehicleSelectionContext.Provider>
  );
}

export function useVehicleSelectionContext() {
  const context = useContext(VehicleSelectionContext);
  if (!context) {
    throw new Error('useVehicleDataContext must be used within a VehicleDataContext.provider');
  }
  return context;
}
