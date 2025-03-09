import React, { useState } from 'react';
import { useVehicleSelectionContext } from '../../../app/contexts/VehicleSelectionContext';
import { Label } from '../../ui/Label';
import styled from 'styled-components';
import { StyledSectionWrapper } from '../../utils';

const StyledTemperature = styled.div`
  grid-area: temperature;
  width: 100%;
  margin: auto;
  height: 100%;
`;

const StyledLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  align-items: last baseline;
  position: relative;
`;

const StyledSlider = styled.input`
  width: 100%;
`;
const StyledTempValue = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
`;

const Temperature = () => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const { handleEfficiencyValueChange } = useVehicleSelectionContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ e });
    const value = Number(e.target.value);
    setTemperature(value);
    handleEfficiencyValueChange({ temperature: value });
  };

  return (
    <StyledTemperature>
      <StyledSectionWrapper>
        <StyledLabelWrapper>
          <Label label={'Street Temperature'} />
          <StyledTempValue>{temperature ?? null}</StyledTempValue>
        </StyledLabelWrapper>
        <StyledSlider
          type="range"
          name="temp"
          max={40}
          min={-10}
          defaultValue={20}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
      </StyledSectionWrapper>
    </StyledTemperature>
  );
};

export default Temperature;
