import { atom } from 'jotai';
import { TCoefficientKey } from '../contexts/VehicleSelectionContext';

export const efficiencyValuesAtom = atom<Partial<Record<TCoefficientKey, number>>>({});

export const setEfficiencyValuesAtom = atom(null, (get, set, value: Partial<Record<TCoefficientKey, number>>) => {
  const prevEfficiencyValues = get(efficiencyValuesAtom);
  set(efficiencyValuesAtom, { ...prevEfficiencyValues, ...value });
});

export const rangeAtomValue = atom<number>();
