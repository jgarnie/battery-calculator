'use client';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { useVehicleSelectionContext } from '../../../app/contexts/VehicleSelectionContext';
import { useRef, useCallback, Fragment } from 'react';

export const OptionsSelection = ({
  data,
  type,
}: {
  data: { label: string; value: number }[];
  type: string;
}) => {
  const { selectedVehicle, handleEfficiencyValueChange } =
    useVehicleSelectionContext();
  const layoutSafe = useRef(false);

  const calculateEfficiency = useCallback(
    (values: number[]) => {
      if (!layoutSafe.current) return;
      const efficiencyValues = values.map((value, index) => {
        const efficiency = data[index]?.value || 0;
        const fullRange = selectedVehicle?.fullRange || 500;
        return (efficiency / fullRange) * value;
      });

      const arithmeticMean =
        efficiencyValues.reduce((acc, val) => acc + val, 0) / 100;

      handleEfficiencyValueChange({ [type]: arithmeticMean });
    },
    [data, handleEfficiencyValueChange, selectedVehicle?.fullRange, type]
  );

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[100px] max-w-md rounded-lg border md:min-w-[450px]"
      onLayout={calculateEfficiency}
      onMouseEnter={() => (layoutSafe.current = true)}
    >
      {data.map((item, index) => (
        <Fragment key={`${index}-${item.label}`}>
          <ResizablePanel>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">{item.label}</span>
            </div>
          </ResizablePanel>
          {index < data.length - 1 && (
            <ResizableHandle
              withHandle
              classEl={index < data.length - 2 ? 'self-start' : 'self-end'}
            />
          )}
        </Fragment>
      ))}
    </ResizablePanelGroup>
  );
};
