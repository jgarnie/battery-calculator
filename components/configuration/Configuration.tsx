import React from 'react';

import SectionMapping from './SectionMapping';
import { useSetupContext } from '../../app/contexts/SeupContext';

const Configuration = () => {
  const { appConfiguration } = useSetupContext();

  return (
    <>
      {appConfiguration.map((optionConfigured) => {
        return <SectionMapping key={optionConfigured.id} option={optionConfigured} />;
      })}
    </>
  );
};

export default Configuration;
