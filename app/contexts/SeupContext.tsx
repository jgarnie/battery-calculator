'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { TCarImageItem, TVehicleDataApi, TAppConfigurationApi, TSetup } from '../../lib/getSetup';

type TSetupContextWrapperContext = {
  appConfiguration: TAppConfigurationApi[] | [];
  vehicleList: TVehicleDataTransformed[] | [];
};

export type TVehicleDataTransformed = TVehicleDataApi & {
  imageUrl: string;
};

const SetupContextWrapperContext = createContext<TSetupContextWrapperContext | undefined>(undefined);

export function SetupContextWrapper({ children, setupData }: { children: ReactNode; setupData: TSetup }) {
  const [appConfiguration, setAppConfiguration] = useState<TAppConfigurationApi[] | []>([]);
  const [vehicleList, setVehicleList] = useState<TVehicleDataTransformed[] | []>([]);
  const { cars, configuration, images } = setupData;

  const addVehicleImage = (cars: TVehicleDataApi[], images: TCarImageItem[]) => {
    console.log({ cars, images });

    return cars.reduce<TVehicleDataTransformed[]>((acc, car) => {
      console.log({ car });

      const imageUrl = images.find((imageData) => imageData.model === car.name);
      console.log({ imageUrl });

      if (!imageUrl) {
        console.error(`Missing image for model ${car.name} please check your bucket`);
        return acc;
      }

      return [...acc, { ...car, imageUrl: imageUrl?.url }];
    }, []);
  };

  useEffect(() => {
    const getData = async () => {
      setAppConfiguration(configuration);
      const transFormedVehicleList = addVehicleImage(cars, images);
      console.log({ cars, configuration, images });

      setVehicleList(transFormedVehicleList);
    };
    getData();
  }, [cars, configuration, images]);

  return (
    <SetupContextWrapperContext.Provider
      value={{
        appConfiguration,
        vehicleList,
      }}
    >
      {children}
    </SetupContextWrapperContext.Provider>
  );
}

export function useSetupContext() {
  const context = useContext(SetupContextWrapperContext);
  if (!context) {
    throw new Error('useVehicleDataContext must be used within a VehicleDataContext.provider');
  }
  return context;
}
