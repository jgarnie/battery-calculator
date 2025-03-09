import React, { useState } from 'react';
import { Button } from '../../ui/Buton';
import { useVehicleSelectionContext } from '../../../app/contexts/VehicleSelectionContext';
import { Label } from '../../ui/Label';
import Image from 'next/image';
import styled from 'styled-components';
import { StyledSectionWrapper } from '../../utils';

const StyledSeasonSelect = styled.div`
  grid-area: seasonSelect;
  width: 100%;
  margin: auto;
  height: 100%;
  align-items: stretch;
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80%;
`;

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
    <StyledSeasonSelect>
      <StyledSectionWrapper>
        <Label label={'Season'} />
        <StyledButtonsWrapper>
          {seasonArray.map((season) => {
            return (
              <Button
                value={getSeasonValue(season)}
                key={season}
                onClick={handleClick}
                $isActive={selectedSeason === season}
                label={season}
              >
                <Image
                  src={`/images/${season}.png`}
                  alt={`image of ${season}`}
                  width={20}
                  height={20}
                />
                {season.charAt(0).toUpperCase()}
                {season.substring(1)}
              </Button>
            );
          })}
        </StyledButtonsWrapper>
      </StyledSectionWrapper>
    </StyledSeasonSelect>
  );
};

export default SeasonSelect;
