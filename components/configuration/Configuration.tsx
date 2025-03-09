import React from 'react';
import { useVehicleSelectionContext } from '../../app/contexts/VehicleSelectionContext';

import { useAppConfigurationContext } from '../../app/contexts/AppConfigurationContext';
import SectionMapping from './SectionMapping';

const Configuration = () => {
  const { selectedVehicle } = useVehicleSelectionContext();
  const { appConfiguration } = useAppConfigurationContext();
  if (!selectedVehicle) return;

  return (
    <>
      {appConfiguration.map((optionConfigured) => {
        return (
          <SectionMapping key={optionConfigured.id} option={optionConfigured} />
        );
      })}
    </>
  );
};

export default Configuration;
