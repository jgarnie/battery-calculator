import React from 'react';
import styled from 'styled-components';
import { TVehicleDataTransformed } from '../../app/contexts/VehicleDataContext';

const StyledImage = styled.img`
  height: auto;
  width: 90%;
`;
const CarImage = ({ vehicle }: { vehicle: TVehicleDataTransformed }) => {
  return (
    <div>
      <StyledImage src={vehicle?.imageUrl} />
    </div>
  );
};

export default CarImage;
