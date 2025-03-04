import React, { useState } from 'react';
import { useVehicleSelectionContext } from '../../../app/contexts/VehicleSelectionContext';
import { Button } from '../../ui/button';
import SummerIcon from '../../icons/SummerIcon';
import Winter from '../../icons/Winter';
import styled from 'styled-components';

const StyledConfortSelect = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const StyledConfortButton = styled(Button)`
  width: 40%;
`;

const ComfortSelect = () => {
  const { selectedVehicle } = useVehicleSelectionContext();
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <StyledConfortSelect>
      <StyledConfortButton>
        <SummerIcon />
      </StyledConfortButton>
      <StyledConfortButton>
        <Winter />
      </StyledConfortButton>
    </StyledConfortSelect>
  );
};

export default ComfortSelect;
