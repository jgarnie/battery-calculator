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
  selectedVehicle: Record<string, TVehicleDataTransformed>[];
  handleSelectMultipleVehicles: (
    value: Record<string, TVehicleDataTransformed>
  ) => void;
  handleEfficiencyValueChange: (
    key: string,
    value: Partial<Record<TCoefficientKey, number>>
  ) => void;
  range: TRange;
};
type TRange = Record<string, number>[];
type TEefficiencyValue = Record<
  string,
  Partial<Record<TCoefficientKey, number>>
>[];

type TCoefficientKey =
  | 'partOfYear'
  | 'typeOfRoad'
  | 'drivingStyle'
  | 'heatingConsumption'
  | 'temperature';

const VehicleSelectionContext = createContext<
  VehicleSelectionContextValue | undefined
>(undefined);

export function VehicleSelectionContextWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const { vehicleList } = useVehicleDataContext();

  const [selectedVehicle, setSelectedVehicle] = useState<
    Record<string, TVehicleDataTransformed>[]
  >([]);
  const [efficiencyValues, setEfficiencyValues] = useState<TEefficiencyValue>();
  const [range, setRange] = useState<TRange>([]);

  useEffect(() => {
    if (vehicleList.length === 0) return; // Only run if vehicleList is not empty
    setSelectedVehicle([{ [vehicleList[0].name]: vehicleList[0] }]);
    setRange([{ [vehicleList[0].name]: vehicleList[0].fullRange }]); // Set range after vehicleList is populated
  }, [vehicleList]);

  const handleEfficiencyValueChange = (
    key: string,
    value: Partial<Record<TCoefficientKey, number>>
  ) => {
    console.log(value);

    const coefficientState = efficiencyValues?.find((val) =>
      Object.keys(val).find((inVal) => inVal === key)
    );

    console.log(key, value);
  };

  const handleSelectMultipleVehicles = (
    vehicle: Record<string, TVehicleDataTransformed>
  ) => {
    const vehicleKey = Object.keys(vehicle)[0];

    const isVehicleAlreadySelected = selectedVehicle.some((existingVehicle) =>
      Object.keys(existingVehicle).includes(vehicleKey)
    );

    if (isVehicleAlreadySelected) return;
    setSelectedVehicle([vehicle]);
  };

  //   useEffect(() => {
  //     const sanitizedValue = {
  //       drivingStyle: efficiencyValues.drivingStyle || 1,
  //       heatingConsumption: efficiencyValues.heatingConsumption || 0,
  //       typeOfRoad: efficiencyValues.typeOfRoad || 1,
  //       temperature: efficiencyValues.temperature || 0,
  //       fullRange: selectedVehicle?.fullRange || 500,
  //       partOfYear: efficiencyValues.partOfYear || 1,
  //     };

  //     const bateryRange =
  //       sanitizedValue.fullRange *
  //         sanitizedValue.drivingStyle *
  //         sanitizedValue.partOfYear *
  //         sanitizedValue.typeOfRoad -
  //       sanitizedValue.temperature -
  //       sanitizedValue.heatingConsumption;
  //     setRange(Number(bateryRange.toFixed(0)));
  //   }, [efficiencyValues, selectedVehicle?.fullRange]);

  return (
    <VehicleSelectionContext.Provider
      value={{
        selectedVehicle,
        handleSelectMultipleVehicles,
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
    throw new Error(
      'useVehicleDataContext must be used within a VehicleDataContext.provider'
    );
  }
  return context;
}
