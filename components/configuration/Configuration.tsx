import React from 'react';
import styled from 'styled-components';

import { useAppConfigurationContext } from '../../app/contexts/AppConfigurationContext';
import SectionMapping from './SectionMapping';

const StyledConfigurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Configuration = () => {
  const { appConfiguration } = useAppConfigurationContext();

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
