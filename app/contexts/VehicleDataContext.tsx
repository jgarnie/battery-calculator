'use client';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { getCarList, VehicleDataApi } from '../../lib/getCarList';
import { getImagesList, TCarImageItem } from '../../lib/getImages';

export type TVehicleDataTransformed = VehicleDataApi & {
  imageUrl: string;
};

type VehicleDataContextValue = {
  vehicleList: TVehicleDataTransformed[] | [];
  setVehicleList: React.Dispatch<
    React.SetStateAction<TVehicleDataTransformed[] | []>
  >;
};

const VehicleDataContext = createContext<VehicleDataContextValue | undefined>(
  undefined
);

export function VehicleDataContextWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const [vehicleList, setVehicleList] = useState<
    TVehicleDataTransformed[] | []
  >([]);

  const addVehicleImage = (data: VehicleDataApi[], images: TCarImageItem[]) => {
    return data.reduce<TVehicleDataTransformed[]>((acc, car) => {
      const imageUrl = images.find((imageData) => imageData.model === car.name);

      if (!imageUrl) {
        console.error(
          `Missing image for model ${car.name} please check your bucket`
        );
        return acc;
      }

      return [...acc, { ...car, imageUrl: imageUrl?.url }];
    }, []);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getCarList();
      const images = await getImagesList();

      const transFormedVehicleList = addVehicleImage(data, images);

      setVehicleList(transFormedVehicleList);
    };
    getData();
  }, []);

  return (
    <VehicleDataContext.Provider
      value={{
        vehicleList,
        setVehicleList,
      }}
    >
      {children}
    </VehicleDataContext.Provider>
  );
}

export function useVehicleDataContext() {
  const context = useContext(VehicleDataContext);
  if (!context) {
    throw new Error(
      'useVehicleDataContext must be used within a VehicleDataContext.provider'
    );
  }
  return context;
}
