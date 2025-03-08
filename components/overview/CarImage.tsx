import React from 'react';
import { useVehicleSelectionContext } from '../../app/contexts/VehicleSelectionContext';
import Image from 'next/image';

const CarImage = () => {
  const { selectedVehicle } = useVehicleSelectionContext();
  if (!selectedVehicle?.imageUrl) return;
  return (
    <Image
      src={selectedVehicle?.imageUrl}
      height={400}
      width={500}
      alt={`image of a ${selectedVehicle.name}`}
      className="w-full h-full"
    />
  );
};

export default CarImage;
