import React from 'react';
import { useVehicleSelectionContext } from '../../app/contexts/VehicleSelectionContext';
import Image from 'next/image';
import styled from 'styled-components';
import { rangePercentage } from '../../lib/utils';

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
  @media (min-width: 560px) {
    height: 100%;
  }
`;

const StyledImage = styled(Image)<{ $availablebattery: string }>`
  object-fit: fill;
  filter: drop-shadow(
    1px 1px 3px ${({ $availablebattery }) => $availablebattery}
  );
`;

const CarImage = () => {
  const { selectedVehicle, range } = useVehicleSelectionContext();
  if (!selectedVehicle?.imageUrl) return;
  const availableBattery = rangePercentage(selectedVehicle?.fullRange, range);

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
