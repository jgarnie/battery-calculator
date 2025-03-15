import { TCoefficientKey } from '../../../app/contexts/VehicleSelectionContext';

export const calculateRange = (efficiencyValues: Partial<Record<TCoefficientKey, number>>, fullRange: number) => {
  const sanitizedValue = {
    drivingStyle: efficiencyValues.drivingStyle || 1,
    heatingConsumption: efficiencyValues.heatingConsumption || 0,
    typeOfRoad: efficiencyValues.typeOfRoad || 1,
    temperature: efficiencyValues.temperature || 0,
    fullRange: fullRange || 500,
    partOfYear: efficiencyValues.partOfYear || 1,
  };

  return (
    sanitizedValue.fullRange * sanitizedValue.drivingStyle * sanitizedValue.partOfYear * sanitizedValue.typeOfRoad -
    sanitizedValue.temperature -
    sanitizedValue.heatingConsumption
  );
};
