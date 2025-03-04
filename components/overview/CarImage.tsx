import React from 'react';
import { useVehicleSelectionContext } from '../../app/contexts/VehicleSelectionContext';
import styled from 'styled-components';

const StyledImage = styled.img`
  height: auto;
  width: 90%;
`;
const CarImage = () => {
  const { selectedVehicle } = useVehicleSelectionContext();

  return (
    <div>
      <StyledImage src={selectedVehicle?.imageUrl} />
    </div>
  );
};

export default CarImage;
