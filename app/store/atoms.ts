import { atom } from 'jotai';
import { TCoefficientKey } from '../contexts/VehicleSelectionContext';

export const efficiencyValues = atom<Partial<Record<TCoefficientKey, number>>>({});

export const setEfficiencyValues = atom(
  null, // This atom doesn't hold a value itself
  (get, set, value: Partial<Record<TCoefficientKey, number>>) => {
    const prevEfficiencyValues = get(efficiencyValues);
    set(efficiencyValues, { ...prevEfficiencyValues, ...value });
  }
);

export const rangeAtom = atom<number>();

//handle the logic on the range component
