'use client';
import React from 'react';

import { VehicleSelect } from './Select';
import CarImage from './CarImage';
import VehicleEfficiency from './VehicleEfficiencyValue';

export const VehicleOverview = () => {
  return (
    <div className="grid-layout md:pt-[24px] md:h-screen h-[50vh] ">
      <div className="select flex-grow">
        <VehicleSelect />
      </div>

      <div className="image md:h-[400px] flex-grow">
        <CarImage />
      </div>
      <div className="range sticky top-0 ">
        <div className=" w-full h-[50px] justify-center align-middle flex text-[30px] md:text-[50px]">
          <VehicleEfficiency />
          &nbsp;
          <span>Km</span>
        </div>
      </div>
    </div>
  );
};
