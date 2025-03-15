import React, { useRef, useEffect, useState } from 'react';
import { useVehicleSelectionContext } from '../../app/contexts/VehicleSelectionContext';
import { animated, useSpring } from '@react-spring/web';
import styled from 'styled-components';
import Battery from '../icons/Battery';
import { calculateRange } from './utils/utils';
import { efficiencyValues, rangeAtom, setEfficiencyValues } from '../../app/store/atoms';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';

const StyledAnimatedDiv = styled(animated.div)`
  grid-area: range;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 3rem;
  background-color: ${({ theme }) => theme.color.secondary};
  color: white;

  @media (max-width: 600px) {
    max-height: 62px;
    font-size: 16px;
  }
`;

const StyledRangeLabel = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const RangeDiv = ({ n, initialRange }: { n: number; initialRange: number }) => {
  const storedValue = useRef<number | null>(null);
  const previousValue = storedValue.current ?? initialRange;

  const { number } = useSpring({
    from: { number: previousValue },
    to: { number: n },
    delay: 50,
    config: { mass: 1, tension: 200, friction: 15 },
  });

  useEffect(() => {
    storedValue.current = n;
  }, [n]);

  return <animated.div>{number.to((value: number) => `${value.toFixed(0)}`)}</animated.div>;
};

const VehicleRangeValue = () => {
  const [batteryLines, setBatteryLines] = useState(4);
  const { selectedVehicle } = useVehicleSelectionContext();
  const [range, setRange] = useAtom(rangeAtom);
  const efficiencyValuesatom = useAtomValue(efficiencyValues);

  useEffect(() => {
    if (!selectedVehicle?.fullRange || !range) return;
    const batteryPercentage = (range / selectedVehicle.fullRange) * 100;
    const lines = (batteryPercentage * 4) / 100;

    setBatteryLines(lines);
  }, [range, selectedVehicle?.fullRange]);

  if (!selectedVehicle?.fullRange) return;

  setRange(calculateRange(efficiencyValuesatom, selectedVehicle?.fullRange));
  return (
    <StyledAnimatedDiv>
      <StyledRangeLabel>
        <RangeDiv n={range || selectedVehicle?.fullRange} initialRange={selectedVehicle?.fullRange} />
        <span> &nbsp;km</span>
      </StyledRangeLabel>
      <Battery lines={batteryLines} />
    </StyledAnimatedDiv>
  );
};

export default VehicleRangeValue;
