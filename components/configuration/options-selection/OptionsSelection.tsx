import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import Image from 'next/image';
import { useVehicleSelectionContext } from '../../../app/contexts/VehicleSelectionContext';
import { useRef, useCallback, Fragment, useState } from 'react';
import styled from 'styled-components';
import { setEfficiencyValuesAtom } from '../../../app/store/atoms';
import { useSetAtom } from 'jotai';

const StyledImageWrapper = styled.div<{ colorback: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  background-color: ${({ colorback }) => colorback};
`;

const StyledPercentageNumber = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 10px;
`;

export const OptionsSelection = ({ data, type }: { data: { label: string; value: number }[]; type: string }) => {
  const { selectedVehicle } = useVehicleSelectionContext();
  const [optionsValues, setOptionsValues] = useState<number[] | []>([]);
  const layoutSafe = useRef(false);

  const updateEfficiency = useSetAtom(setEfficiencyValuesAtom);

  const calculateEfficiency = useCallback(
    (values: number[]) => {
      if (!layoutSafe.current) return;
      const efficiencyValues = values.map((value, index) => {
        setOptionsValues((prevOptionsValues) => {
          const updatedOptionsValues = [...prevOptionsValues];
          values.forEach((value, index) => {
            updatedOptionsValues[index] = value;
          });

          return updatedOptionsValues;
        });
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
    const notActivePicker = !layoutSafe.current;
    switch (index) {
      case 0:
        return notActivePicker ? '#535355' : '#261ec7';
      case 1:
        return notActivePicker ? '#4c4c56' : '#c77e1e';
      case 2:
        return notActivePicker ? '#727276' : '#14874e';
    }
    return '#bbfa7d';
  };

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="rounded-lg border-0"
      onLayout={calculateEfficiency}
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
                {optionsValues[index] && (
                  <StyledPercentageNumber>{Math.round(optionsValues[index])}%</StyledPercentageNumber>
                )}
              </StyledImageWrapper>
            </ResizablePanel>

            {index < data.length - 1 && <ResizableHandle withHandle />}
          </Fragment>
        );
      })}
    </ResizablePanelGroup>
  );
};
