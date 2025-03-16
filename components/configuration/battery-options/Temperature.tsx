import React, { useState } from 'react';
import { Label } from '../../ui/Label';
import styled from 'styled-components';
import { StyledSectionWrapper } from '../../utils';
import { useSetAtom } from 'jotai';
import { setEfficiencyValuesAtom } from '../../../app/store/atoms';

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
  const updateEfficiency = useSetAtom(setEfficiencyValuesAtom);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setTemperature(value);
    updateEfficiency({ temperature: value });
  };

  return (
    <StyledTemperature>
      <StyledSectionWrapper>
        <StyledLabelWrapper>
          <Label label={'Street Temperature'} />
          <StyledTempValue>{temperature ?? null}&deg;C</StyledTempValue>
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
