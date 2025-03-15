import React, { useState } from 'react';
import { Button } from '../../ui/Buton';
import { useVehicleSelectionContext } from '../../../app/contexts/VehicleSelectionContext';
import { Label } from '../../ui/Label';
import Image from 'next/image';
import styled from 'styled-components';
import { StyledSectionWrapper } from '../../utils';
import { useSetAtom } from 'jotai';
import { setEfficiencyValuesAtom } from '../../../app/store/atoms';

const StyledSeasonSelect = styled.div`
  grid-area: seasonSelect;
  width: 100%;
  margin: auto;
  height: 100%;
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80%;
`;

const SeasonSelect = () => {
  const [selectedSeason, setSelectedSeason] = useState('');
  const { selectedVehicle } = useVehicleSelectionContext();
  const updateEfficiency = useSetAtom(setEfficiencyValuesAtom);

  if (!selectedVehicle) return;
  const {
    partOfYear: { autumn, summer, winter },
    fullRange,
  } = selectedVehicle;

  const handleClick = (seasonValue: number, label: string | undefined) => {
    setSelectedSeason(label || '');
    updateEfficiency({ partOfYear: seasonValue / fullRange });
  };

  const seasonArray = ['winter', 'summer', 'autumn'];
  const getSeasonValue = (season: string) => {
    switch (season) {
      case 'winter':
        return winter;
      case 'autumn':
        return autumn;
      case 'summer':
        return summer;
      default:
        return summer;
    }
  };

  return (
    <StyledSeasonSelect>
      <StyledSectionWrapper>
        <Label label={'Season'} />
        <StyledButtonsWrapper>
          {seasonArray.map((season) => {
            return (
              <Button
                value={getSeasonValue(season)}
                key={season}
                onClick={handleClick}
                $isActive={selectedSeason === season}
                label={season}
              >
                {selectedSeason === 'summer' && season === selectedSeason && (
                  <StyledSummerWrap>
                    <SunIcon />
                  </StyledSummerWrap>
                )}
                {selectedSeason !== 'summer' &&
                  season === selectedSeason &&
                  Array.from({ length: 15 }).map((_, i) => (
                    <StyledWrap
                      key={i}
                      left={Math.floor(Math.random() * 100)}
                      delay={Math.floor(Math.random() * 2) + i * Math.random() * 2}
                    >
                      {selectedSeason === 'winter' && season === selectedSeason && (
                        <SnowFlakeIcon size={Math.floor(Math.random() * 7) + 6} />
                      )}
                      {selectedSeason === 'autumn' && season === selectedSeason && (
                        <LeaveIcon size={Math.floor(Math.random() * 7) + 6} />
                      )}
                    </StyledWrap>
                  ))}
                <Image src={`/images/${season}.png`} alt={`image of ${season}`} width={20} height={20} />

                {season.charAt(0).toUpperCase()}
                {season.substring(1)}
              </Button>
            );
          })}
        </StyledButtonsWrapper>
      </StyledSectionWrapper>
    </StyledSeasonSelect>
  );
};

export default SeasonSelect;
const StyledSummerWrap = styled.div`
  will-change: transform;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  animation: sunLight 1s linear forwards;
  animation-delay: 1s;
  @keyframes sunLight {
    0% {
      background: transparent;
    }
    25% {
      background: linear-gradient(to right bottom, #ffae00 0%, transparent 30%);
    }
    40% {
      background: linear-gradient(to right bottom, #ffae00 0%, transparent 40%);
    }
    50% {
      background: linear-gradient(to right bottom, #ffae00 0%, transparent 50%);
    }
    60% {
      background: linear-gradient(to right bottom, #ffae00 0%, transparent 55%);
    }
    75% {
      background: linear-gradient(to right bottom, #ffae00 0%, transparent 60%);
    }
    100% {
      background: linear-gradient(to right bottom, #ffae00 0%, transparent 70%);
    }
  }
`;

const StyledWrap = styled.div<{ left: number; delay: number }>`
  height: 125%;
  width: 100%;
  top: -12px;
  left: ${({ left }) => left}%;
  position: absolute;
  animation: snowFlake 4s infinite;
  animation-timing-function: linear;
  animation-delay: ${({ delay }) => delay}s;
  @keyframes snowFlake {
    0% {
      transform: translate(0%, 0%);

      opacity: 0;
    }
    1% {
      transform: translate(0%, 2%);
      opacity: 0.5;
    }
    5% {
      transform: translate(1%, 5%);
      opacity: 1;
    }
    10% {
      transform: translate(2%, 10%);
    }
    25% {
      transform: translate(0%, 25%);
    }
    50% {
      transform: translate(-3%, 50%);
    }
    60% {
      transform: translate(0%, 60%);
    }
    75% {
      transform: translate(2%, 75%);
    }
    85% {
      transform: translate(0%, 85%);
    }
    100% {
      transform: translate(-1%, 100%);
    }
  }
`;

const SnowFlakeIcon = ({ size }: { size: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m10 20-1.25-2.5L6 18" fill="#88C9F9" />
      <path d="M10 4 8.75 6.5 6 6" fill="#88C9F9" />
      <path d="m14 20 1.25-2.5L18 18" fill="#88C9F9" />
      <path d="m14 4 1.25 2.5L18 6" fill="#88C9F9" />
      <path d="m17 21-3-6h-4" fill="#88C9F9" />
      <path d="m17 3-3 6 1.5 3" fill="#88C9F9" />
      <path d="M2 12h6.5L10 9" fill="#88C9F9" />
      <path d="m20 10-1.5 2 1.5 2" fill="#88C9F9" />
      <path d="M22 12h-6.5L14 15" fill="#88C9F9" />
      <path d="m4 10 1.5 2L4 14" fill="#88C9F9" />
      <path d="m7 21 3-6-1.5-3" fill="#88C9F9" />
      <path d="m7 3 3 6h4" fill="#88C9F9" />
    </svg>
  );
};
const StyledLeave = styled.svg<{ degree: string; $animationduration: number }>`
  animation: rotateLeave ${({ $animationduration }) => $animationduration}s linear infinite;
  position: absolute;
  top: -5px;
  @keyframes rotateLeave {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(${({ degree }) => degree});
    }
  }
`;
const LeaveIcon = ({ size }: { size: number }) => {
  const leaveAngle = Math.floor(Math.random() * 91);
  const degree = Math.random() > 0.5 ? leaveAngle + 'deg' : -leaveAngle + 'deg';

  return (
    <StyledLeave
      $animationduration={Math.random() * 10}
      degree={degree}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#cf5504"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </StyledLeave>
  );
};
const StyledSunIcon = styled.svg`
  animation: sun 1s linear forwards;
  position: absolute;
  top: -24px;
  @keyframes sun {
    0% {
      transform: translateY(10%);
    }
    25% {
      transform: translateY(25%);
    }
    50% {
      transform: translateY(50%);
    }
    75% {
      transform: translateY(75%);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;
const SunIcon = () => {
  return (
    <StyledSunIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" fill="#FFE477" />
      <path d="M12 2v2" fill="#FFE477" />
      <path d="M12 20v2" fill="#FFE477" />
      <path d="m4.93 4.93 1.41 1.41" fill="#FFE477" />
      <path d="m17.66 17.66 1.41 1.41" fill="#FFE477" />
      <path d="M2 12h2" fill="#FFE477" />
      <path d="M20 12h2" fill="#FFE477" />
      <path d="m6.34 17.66-1.41 1.41" fill="#FFE477" />
      <path d="m19.07 4.93-1.41 1.41" fill="#FFE477" />
    </StyledSunIcon>
  );
};
