'use client';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { useVehicleSelectionContext } from '../../../app/contexts/VehicleSelectionContext';
import { useEffect, useRef } from 'react';

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

  if (!selectedVehicle) return;
  const { fullRange } = selectedVehicle;

  const calculateEfficiency = (values: number[]) => {
    if (!layoutSafe.current) return;
    const valueCoeffiecy = values.map((value, index) => {
      const efficiency = data[index].value;

      return (efficiency / fullRange) * value;
    });

    const arithmeticMean =
      valueCoeffiecy.reduce((acc, val) => acc + val, 0) / 100;
    handleEfficiencyValueChange({ [type]: arithmeticMean });
    return arithmeticMean;
  };

  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
        onLayout={calculateEfficiency}
        onMouseEnter={() => (layoutSafe.current = true)}
      >
        <ResizablePanel>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">{data[0].label}</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">{data[1].label}</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle isEnd />
        <ResizablePanel>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">{data[2].label}</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};
