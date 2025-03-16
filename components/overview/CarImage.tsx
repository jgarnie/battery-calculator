import React from 'react';
import { useVehicleSelectionContext } from '../../app/contexts/VehicleSelectionContext';
import Image from 'next/image';
import styled from 'styled-components';
import { rangePercentage } from '../../lib/utils';
import { rangeAtomValue } from '../../app/store/atoms';
import { useAtomValue } from 'jotai';

const StyledImageWrapper = styled.div`
  grid-area: image;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto;
`;
const StyledSectionWrapper = styled.div`
  margin: auto;
  width: 100%;
  height: 80%;
  @media (min-width: 960px) {
    height: 100%;
  }
`;

const StyledImage = styled(Image)<{ $availablebattery: string }>`
  object-fit: fill;
  filter: drop-shadow(1px 1px 3px ${({ $availablebattery }) => $availablebattery});
  max-height: 300px;
  max-width: 600px;
`;

const CarImage = () => {
  const { selectedVehicle } = useVehicleSelectionContext();
  const rangeValue = useAtomValue(rangeAtomValue);

  if (!selectedVehicle?.imageUrl) return;
  const availableBattery = rangePercentage(selectedVehicle?.fullRange, rangeValue || selectedVehicle.fullRange);

  return (
    <StyledImageWrapper>
      <StyledSectionWrapper>
        <StyledImage
          $availablebattery={availableBattery}
          src={selectedVehicle?.imageUrl}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          alt={`image of a ${selectedVehicle.name}`}
        />{' '}
      </StyledSectionWrapper>
    </StyledImageWrapper>
  );
};

export default CarImage;
