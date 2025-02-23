'use client';
import React from 'react';
import { useVehicleDataContext } from '../../app/contexts/VehicleDataContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const VehicleOverview = () => {
  const { vehicleList } = useVehicleDataContext();
  <div>
    {vehicleList.length &&
      vehicleList.map((vehicle) => {
        return <div key={vehicle.name}>{vehicle.name}</div>;
      })}
  </div>;
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={vehicleList[0]?.name} />
      </SelectTrigger>
      <SelectContent>
        {vehicleList.length &&
          vehicleList.map((vehicle) => {
            return (
              <SelectItem key={vehicle.name} value={vehicle.name}>
                {vehicle.name}
              </SelectItem>
            );
          })}
      </SelectContent>
    </Select>
  );
};
