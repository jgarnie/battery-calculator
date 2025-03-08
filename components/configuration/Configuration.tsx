import React from 'react';
import styled from 'styled-components';
import { useVehicleSelectionContext } from '../../app/contexts/VehicleSelectionContext';

import { useAppConfigurationContext } from '../../app/contexts/AppConfigurationContext';
import SectionMapping from './SectionMapping';

const StyledConfigurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 50%;
  @media (min-width: 960px) and (orientation: portrait) {
    gap: 10px;
  }
`;

const Configuration = () => {
  const { selectedVehicle } = useVehicleSelectionContext();
  const { appConfiguration } = useAppConfigurationContext();
  if (!selectedVehicle) return;

  return (
    <StyledConfigurationContainer>
      {appConfiguration.map((optionConfigured) => {
        return (
          <SectionMapping key={optionConfigured.id} option={optionConfigured} />
        );
      })}
    </StyledConfigurationContainer>
  );
};

export default Configuration;
