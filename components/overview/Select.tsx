'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { useVehicleSelectionContext } from '../../app/contexts/VehicleSelectionContext';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styled, { css } from 'styled-components';
import { useSetupContext, TVehicleDataTransformed } from '../../app/contexts/SeupContext';

const StyledSelect = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  max-height: 60px;
  grid-area: select;
  height: 100%;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
const StyledSelectButton = styled.div`
  display: flex;
  padding: 10px;
  height: 100%;
`;
const StyledSelectButtonCarData = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  align-items: center;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const StyledOptionsWrapper = styled.div<{ $elementWidth: number }>`
  position: absolute;
  z-index: 10;
  background-color: ${({ theme }) => theme.color.background};
  width: ${({ $elementWidth }) => $elementWidth}px;
`;
const StyledOption = styled.div<{ $isSelected: boolean }>`
  ${({ $isSelected, theme }) =>
    $isSelected &&
    css`
      background-color: ${theme.color.tertiary};
      color: ${theme.color.background};
      font-weight: bold;
    `}

  display: flex;
  padding: 20px 12px;
`;

export const VehicleSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { vehicleList } = useSetupContext();

  const { selectedVehicle, setSelectedVehicle } = useVehicleSelectionContext();
  const selectRef = useRef<HTMLDivElement | null>(null);
  const handleVehicleSelection = (vehicleName: TVehicleDataTransformed) => {
    setSelectedVehicle(vehicleName);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <StyledSelect ref={selectRef} onClick={() => setIsOpen(!isOpen)} role="button">
      <StyledSelectButton>
        <StyledSelectButtonCarData>
          <div>{selectedVehicle?.name}</div>
          <div>{isOpen ? <ChevronUp /> : <ChevronDown />}</div>
        </StyledSelectButtonCarData>
      </StyledSelectButton>
      <StyledOptionsWrapper $elementWidth={selectRef.current?.clientWidth || 100}>
        {vehicleList.length > 0 &&
          isOpen &&
          vehicleList.map((vehicle) => (
            <StyledOption
              key={vehicle.name}
              onClick={() => handleVehicleSelection(vehicle)}
              $isSelected={vehicle.name === selectedVehicle?.name}
            >
              <Image
                sizes="100vw"
                style={{ maxWidth: '30px', maxHeight: '20px' }}
                className="mr-2"
                src={vehicle.imageUrl}
                alt="image of a car"
                width={30}
                height={20}
              />
              <div>{vehicle.name}</div>
            </StyledOption>
          ))}
      </StyledOptionsWrapper>
    </StyledSelect>
  );
};
