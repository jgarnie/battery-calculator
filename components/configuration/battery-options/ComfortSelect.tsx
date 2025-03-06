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
const StyledConfortButton = styled(Button)<{ $isActive: boolean }>`
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.color.tertiary : theme.color.background};
  width: 40%;
  cursor: pointer;
`;
type TConfortValue = {
  label: string;
  value: number;
};

//refactor
const ComfortSelect = () => {
  const { selectedVehicle, handleEfficiencyValueChange } =
    useVehicleSelectionContext();
  const [selectedOption, setSelectedOption] = useState<TConfortValue>({
    label: '',
    value: 0,
  });

  if (!selectedVehicle) return;
  const { heatingConsumption, coolingConsumption } = selectedVehicle;

  const handleClick = (valueData: TConfortValue) => {
    if (valueData.label === 'heating') {
      if (selectedOption.label === 'heating') {
        return setSelectedOption({
          label: '',
          value: 0,
        });
      }
      handleEfficiencyValueChange({ heatingConsumption: 50 });
      return setSelectedOption({ label: 'heating', value: heatingConsumption });
    }
    if (selectedOption.label === 'cooling') {
      return setSelectedOption({
        label: '',
        value: 0,
      });
    }
    return setSelectedOption({ label: 'cooling', value: coolingConsumption });
  };

  return (
    <StyledConfortSelect>
      <StyledConfortButton
        onClick={() =>
          handleClick({ label: 'heating', value: heatingConsumption })
        }
        $isActive={selectedOption.label === 'heating'}
      >
        <SummerIcon />
      </StyledConfortButton>
      <StyledConfortButton
        onClick={() =>
          handleClick({ label: 'heating', value: heatingConsumption })
        }
        $isActive={selectedOption.label === 'cooling'}
      >
        <Winter />
      </StyledConfortButton>
    </StyledConfortSelect>
  );
};

export default ComfortSelect;
