import React, { useRef, useEffect } from 'react';
import { useVehicleSelectionContext } from '../../app/contexts/VehicleSelectionContext';
import { animated, useSpring } from '@react-spring/web';

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

  return (
    <animated.div>
      {number.to((value: number) => `${value.toFixed(0)}`)}
    </animated.div>
  );
};

const VehicleEfficiency = () => {
  const { selectedVehicle } = useVehicleSelectionContext();
  const { range } = useVehicleSelectionContext();
  if (!selectedVehicle?.fullRange) return;
  return <RangeDiv n={range} initialRange={selectedVehicle?.fullRange} />;
};

export default VehicleEfficiency;
