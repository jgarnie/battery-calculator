'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  TVehicleDataTransformed,
  useVehicleDataContext,
} from '../../app/contexts/VehicleDataContext';
import Image from 'next/image';

import { useVehicleSelectionContext } from '../../app/contexts/VehicleSelectionContext';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styled, { css } from 'styled-components';

const StyledSelect = styled.div`
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.color.background};
  position: sticky;
  top: 0;
  max-height: 50px;

  @media (min-width: 960px) {
    width: 50%;
    max-width: 220px;
    align-self: flex-end;
  }
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
  // refactor to tailwind
  // <div
  // className="flex justify-between w-1/2 max-w-[220px]"
  // ref={selectRef}
  // onClick={() => setIsOpen(!isOpen)}
  // role="button"
  // >
  return (
    <StyledSelect
      ref={selectRef}
      onClick={() => setIsOpen(!isOpen)}
      role="button"
    >
      <StyledSelectButton>
        {selectedVehicle?.imageUrl && (
          <Image
            className="mr-2"
            src={selectedVehicle.imageUrl}
            alt="image of a car"
            width={30}
            height={20}
          />
        )}
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
              <Image
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
