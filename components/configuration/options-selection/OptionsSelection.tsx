'use client';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import Image from 'next/image';
import { useVehicleSelectionContext } from '../../../app/contexts/VehicleSelectionContext';
import { useRef, useCallback, Fragment } from 'react';
import styled from 'styled-components';
import { setEfficiencyValues } from '../../../app/store/atoms';
import { useSetAtom } from 'jotai';

const StyledImageWrapper = styled.div<{ colorback: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${({ colorback }) => colorback};
`;

export const OptionsSelection = ({ data, type }: { data: { label: string; value: number }[]; type: string }) => {
  const { selectedVehicle } = useVehicleSelectionContext();
  const layoutSafe = useRef(false);

  const updateEfficiency = useSetAtom(setEfficiencyValues);

  const calculateEfficiency = useCallback(
    (values: number[]) => {
      if (!layoutSafe.current) return;
      const efficiencyValues = values.map((value, index) => {
        const efficiency = data[index]?.value || 0;
        const fullRange = selectedVehicle?.fullRange || 500;
        return (efficiency / fullRange) * value;
      });

      const arithmeticMean = efficiencyValues.reduce((acc, val) => acc + val, 0) / 100;
      updateEfficiency({ [type]: arithmeticMean });
    },
    [data, selectedVehicle?.fullRange, type, updateEfficiency]
  );
  const getIndexColor = (index: number): string => {
    switch (index) {
      case 0:
        return '#c71e51';
      case 1:
        return '#c77e1e';
      case 2:
        return '#14874e';
    }
    return '#bbfa7d';
  };

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="rounded-lg border-0"
      onLayout={calculateEfficiency}
      onChange={() => console.log('hi')}
      onDrag={() => console.log('hi2')}
      onMouseEnter={() => (layoutSafe.current = true)}
      onTouchStart={() => (layoutSafe.current = true)}
    >
      {data.map((item, index) => {
        const indexColor = getIndexColor(index);
        return (
          <Fragment key={`${index}-${item.label}`}>
            <ResizablePanel>
              <StyledImageWrapper colorback={indexColor}>
                <div>
                  <Image
                    width={24}
                    height={24}
                    alt={`icon of a ${item.label}`}
                    src={`/images/${item.label.toLowerCase()}.png`}
                  />
                </div>

                <div>{item.label} </div>
              </StyledImageWrapper>
            </ResizablePanel>

            {index < data.length - 1 && <ResizableHandle withHandle />}
          </Fragment>
        );
      })}
    </ResizablePanelGroup>
  );
};
