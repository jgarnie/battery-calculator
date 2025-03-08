import React, { useState } from 'react';
import { Button } from '../../ui/Buton';
import { useVehicleSelectionContext } from '../../../app/contexts/VehicleSelectionContext';
import { Label } from '../../ui/Label';
import Image from 'next/image';

const SeasonSelect = () => {
  const [selectedSeason, setSelectedSeason] = useState('');
  const { selectedVehicle, handleEfficiencyValueChange } =
    useVehicleSelectionContext();

  if (!selectedVehicle) return;
  const {
    partOfYear: { autumn, summer, winter },
    fullRange,
  } = selectedVehicle;

  const handleClick = (seasonValue: number, label: string | undefined) => {
    setSelectedSeason(label || '');
    handleEfficiencyValueChange({ partOfYear: seasonValue / fullRange });
  };

  const seasonArray = ['winter', 'summer', 'autumn'];
  const getSeasonValue = (season: string) => {
    switch (season) {
      case 'winter':
        return winter;
      case 'autumn':
        return autumn;
      case 'summer':
        return summer;
      default:
        return summer;
    }
  };

  return (
    <div className="w-full">
      <Label label={'Season'} />
      <div className="flex gap-1 w-full flex-wrap ">
        {seasonArray.map((season) => {
          return (
            <Button
              value={getSeasonValue(season)}
              key={season}
              onClick={handleClick}
              className="flex-col flex-grow  items-center justify-center max-w-[33%]"
              $isActive={selectedSeason === season}
              label={season}
            >
              <Image
                src={`/images/${season}.png`}
                alt={`image of ${season}`}
                width={20}
                height={20}
                className="w-[20px] h-[20px]"
              />
              {season.charAt(0).toUpperCase()}
              {season.substring(1)}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default SeasonSelect;
