import React, { useState } from 'react';
import { useVehicleSelectionContext } from '../../../app/contexts/VehicleSelectionContext';
import { Button } from '../../ui/Buton';
import SummerIcon from '../../icons/SummerIcon';
import Winter from '../../icons/Winter';
import { Label } from '../../ui/Label';

const ComfortSelect = () => {
  const { selectedVehicle, handleEfficiencyValueChange } =
    useVehicleSelectionContext();
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
    <>
      <Label label={'Cabin comfort'} />
      <div className="flex  gap-3">
        <Button
          onClick={handleClick}
          value={selectedOption !== 'heating' ? heatingConsumption : 0}
          $isActive={selectedOption === 'heating'}
          label="heating"
          className="w-[50%]"
        >
          <SummerIcon />
        </Button>
        <Button
          value={selectedOption !== 'cooling' ? coolingConsumption : 0}
          onClick={handleClick}
          $isActive={selectedOption === 'cooling'}
          label="cooling"
          className="w-[50%]"
        >
          <Winter />
        </Button>
      </div>
    </>
  );
};

export default ComfortSelect;
