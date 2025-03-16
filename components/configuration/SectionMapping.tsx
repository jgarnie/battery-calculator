import React from 'react';
import SeasonSelect from './battery-options/SeasonSelect';
import { TypeOfRoad } from './battery-options/TypeOfRoad';
import DrivingStyle from './battery-options/DrivingStyle';
import ComfortSelect from './battery-options/ComfortSelect';
import Temperature from './battery-options/Temperature';
import { TAppConfigurationApi } from '../../lib/getSetup';

const knownOptions = {
  seasonSelect: SeasonSelect,
  typeOfRoad: TypeOfRoad,
  drivingStyle: DrivingStyle,
  interiorComfort: ComfortSelect,
  temperature: Temperature,
};

const SectionMapping = ({ option }: { option: TAppConfigurationApi }) => {
  const Component = knownOptions[option.id];

  if (!Component) return;

  return <Component />;
};

export default SectionMapping;
