'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  TVehicleDataTransformed,
  useVehicleDataContext,
} from '../../app/contexts/VehicleDataContext';

import { useVehicleSelectionContext } from '../../app/contexts/VehicleSelectionContext';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styled, { css } from 'styled-components';

const StyledSelect = styled.div`
  width: 50%;
  max-width: 220px;
  position: relative;
  background-color: ${({ theme }) => theme.color.background};
`;
const StyledSelectButton = styled.div`
  display: flex;
  padding: 12px;
  width: 100%;
`;
const StyledSelectButtonCarData = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const StyledOptionsWrapper = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color.background};
  width: 100%;
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
  width: 100%;
`;
const StyledImage = styled.img`
  width: 30px;
  height: auto;
  margin-right: 4px;
`;

export const VehicleSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { vehicleList } = useVehicleDataContext();
  const { selectedVehicle, setSelectedVehicle } = useVehicleSelectionContext();
  const selectRef = useRef<HTMLDivElement | null>(null);
  const handleVehicleSelection = (vehicleName: TVehicleDataTransformed) => {
    setSelectedVehicle(vehicleName);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <StyledSelect
      ref={selectRef}
      onClick={() => setIsOpen(!isOpen)}
      role="button"
    >
      <StyledSelectButton>
        <StyledImage src={selectedVehicle?.imageUrl} />
        <StyledSelectButtonCarData>
          <div>{selectedVehicle?.name}</div>
          <div>{isOpen ? <ChevronUp /> : <ChevronDown />}</div>
        </StyledSelectButtonCarData>
      </StyledSelectButton>
      <StyledOptionsWrapper>
        {vehicleList.length > 0 &&
          isOpen &&
          vehicleList.map((vehicle) => (
            <StyledOption
              key={vehicle.name}
              onClick={() => handleVehicleSelection(vehicle)}
              $isSelected={vehicle.name === selectedVehicle?.name}
            >
              <StyledImage src={vehicle.imageUrl} />
              <div>{vehicle.name}</div>
            </StyledOption>
          ))}
      </StyledOptionsWrapper>
    </StyledSelect>
  );
};
