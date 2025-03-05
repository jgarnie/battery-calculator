'use client';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import {
  getConfiguration,
  TAppConfigurationApi,
} from '../../lib/getConfiguration';

type TAppConfigurationContext = {
  appConfiguration: TAppConfigurationApi[] | [];
};
const AppConfigurationContext = createContext<
  TAppConfigurationContext | undefined
>(undefined);

export function AppConfigurationContextWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const [appConfiguration, setAppConfiguration] = useState<
    TAppConfigurationApi[] | []
  >([]);

  useEffect(() => {
    const getData = async () => {
      const configuration = await getConfiguration();

      setAppConfiguration(configuration);
    };
    getData();
  }, []);

  return (
    <AppConfigurationContext.Provider
      value={{
        appConfiguration,
      }}
    >
      {children}
    </AppConfigurationContext.Provider>
  );
}

export function useAppConfigurationContext() {
  const context = useContext(AppConfigurationContext);
  if (!context) {
    throw new Error(
      'useVehicleDataContext must be used within a VehicleDataContext.provider'
    );
  }
  return context;
}
