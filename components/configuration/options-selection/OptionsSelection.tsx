'use client';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { useVehicleSelectionContext } from '../../../app/contexts/VehicleSelectionContext';
import { useRef, useCallback, Fragment, useMemo } from 'react';
import { TVehicleDataTransformed } from '../../../app/contexts/VehicleDataContext';

export const OptionsSelection = ({
  type,
}: {
  type: keyof TVehicleDataTransformed;
}) => {
  const { selectedVehicle, handleEfficiencyValueChange } =
    useVehicleSelectionContext();
  const layoutSafe = useRef(false);

  const data = useMemo(
    () =>
      type === 'typeOfRoad'
        ? [
            {
              label: 'City',
              value: 'city',
            },
            {
              label: 'Highway',
              value: 'highway',
            },
            {
              label: 'Secondary',
              value: 'outsideCity',
            },
          ]
        : [
            {
              label: 'Agressive',
              value: 'aggressive',
            },
            {
              label: 'Normal',
              value: 'normal',
            },
            {
              label: 'Eco',
              value: 'snail',
            },
          ],
    [type]
  );

  const calculateEfficiency = useCallback(
    (values: number[]) => {
      if (!layoutSafe.current) return;
      selectedVehicle.map((vehicleRecord) => {
        return Object.entries(vehicleRecord).map(([vehicleName, vehicle]) => {
          const efficiencyValues = values.map((value, index) => {
            const vehicleData = vehicle[type];
            const efficiencyParameter = data[index].value;
            const efficiency =
              vehicleData[efficiencyParameter as keyof typeof vehicleData];
            const fullRange = vehicle.fullRange;
            return (efficiency / fullRange) * value;
          });

          const arithmeticMean =
            efficiencyValues.reduce((acc, val) => acc + val, 0) / 100;
          return handleEfficiencyValueChange(vehicleName, {
            [type]: arithmeticMean,
          });
        });
      });
    },
    [data, handleEfficiencyValueChange, selectedVehicle, type]
  );

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
      onLayout={calculateEfficiency}
      onMouseEnter={() => (layoutSafe.current = true)}
    >
      {data.map((item, index) => (
        <Fragment key={`${index}-${item}`}>
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
