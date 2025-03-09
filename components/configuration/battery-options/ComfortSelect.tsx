import React, { useState } from 'react';
import { useVehicleSelectionContext } from '../../../app/contexts/VehicleSelectionContext';
import { Button } from '../../ui/Buton';
import Winter from '../../icons/Winter';
import { Label } from '../../ui/Label';
import styled from 'styled-components';
import { StyledSectionWrapper } from './../../utils';
import HeatingIcon from './../../icons/Temperature';

const StyledCabin = styled.div`
  grid-area: cabin;
  width: 100%;
  margin: auto;
  height: 100%;
`;

const StyledCabinWrap = styled.div`
  display: flex;
  height: 80%;
  width: 100%;
  justify-content: space-evenly;
`;
const ComfortSelect = () => {
  const { selectedVehicle, handleEfficiencyValueChange } = useVehicleSelectionContext();
  const [selectedOption, setSelectedOption] = useState('');

  if (!selectedVehicle) return;
  const { heatingConsumption, coolingConsumption } = selectedVehicle;

  const handleClick = (valueData: number, label: string | undefined) => {
    if (!selectedOption) {
      setSelectedOption(label || '');
    } else if (selectedOption === label) {
      setSelectedOption('');
    } else {
      setSelectedOption(label || '');
    }
    handleEfficiencyValueChange({ heatingConsumption: valueData });
  };

  return (
    <StyledCabin>
      <StyledSectionWrapper>
        <Label label={'Cabin comfort'} />
        <StyledCabinWrap>
          <Button
            onClick={handleClick}
            value={selectedOption !== 'heating' ? heatingConsumption : 0}
            $isActive={selectedOption === 'heating'}
            label="heating"
          >
            <HeatingIcon />
          </Button>
          <Button
            value={selectedOption !== 'cooling' ? coolingConsumption : 0}
            onClick={handleClick}
            $isActive={selectedOption === 'cooling'}
            label="cooling"
          >
            <Winter />
          </Button>
        </StyledCabinWrap>
      </StyledSectionWrapper>
    </StyledCabin>
  );
};

export default ComfortSelect;
