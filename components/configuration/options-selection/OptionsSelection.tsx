'use client';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import Image from 'next/image';
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
      className="min-h-[50px] rounded-lg border md:min-w-full"
      onLayout={calculateEfficiency}
      onMouseEnter={() => (layoutSafe.current = true)}
    >
      {data.map((item, index) => {
        console.log({ item });
        console.log(`/images/${item.label.toLowerCase()}.png`);

        return (
          <Fragment key={`${index}-${item.label}`}>
            <ResizablePanel>
              <div className="flex-col h-full items-center justify-center p-1 gap-1 bg-accent">
                <div className="flex justify-center">
                  <Image
                    width={24}
                    height={24}
                    alt={`icon of a ${item.label}`}
                    src={`/images/${item.label.toLowerCase()}.png`}
                  />
                </div>
                <div className="flex justify-center">{item.label}</div>
              </div>
            </ResizablePanel>
            {index < data.length - 1 && (
              <ResizableHandle
                withHandle
                classEl={index < data.length - 2 ? 'self-start' : 'self-end'}
              />
            )}
          </Fragment>
        );
      })}
    </ResizablePanelGroup>
  );
};
