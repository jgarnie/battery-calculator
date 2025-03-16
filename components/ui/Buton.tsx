import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  onClick?: (value: number, label?: string) => void;
  $isActive?: boolean;
  children?: React.ReactNode;
  confortButtonType?: string;
  $disabled?: boolean;
  value: number;
  label?: string;
};

const StyledButton = styled.button<{ $isActive: boolean; $confortButtonClass: string }>`
  border: none;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 33%;
  position: relative;
  min-width: 30%;
  max-height: 100px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.5s;
  background-color: ${({ theme, $isActive }) => ($isActive ? theme.color.tertiary : theme.color.primary)};
  box-shadow: ${({ $isActive, theme, $confortButtonClass }) =>
    $isActive
      ? $confortButtonClass && $confortButtonClass.length
        ? $confortButtonClass
        : `inset 0 0 3px 3px  ${theme.color.emphasis}`
      : `0 0 3px 3px  ${theme.color.tertiary}`};
  &:active {
    background-color: ${({ theme, $isActive }) => ($isActive ? theme.color.tertiary : theme.color.primary)};
  }
  @media (min-width: 960px) {
    &:hover {
      background-color: ${({ theme }) => theme.color.tertiary};
    }
  }
`;

export const Button: React.FC<ButtonProps> = ({
  onClick,
  $isActive = false,
  children,
  confortButtonType = '',
  $disabled = false,
  value = 0,
  label = '',
}) => {
  const calculateConfortButtonBoxShadow = () => {
    if (!confortButtonType.length) return '';
    switch (confortButtonType) {
      case 'heating':
        return `inset 0 0 20px 20px  #cf5504`;
      case 'cooling':
        return `inset 0 0 20px 20px  #f7fafa`;
      default:
        return '';
    }
  };
  const confortButtonClass = calculateConfortButtonBoxShadow();

  return (
    <StyledButton
      $confortButtonClass={confortButtonClass}
      $isActive={$isActive}
      onClick={() => onClick?.(value, label)}
      disabled={$disabled}
    >
      {children}
    </StyledButton>
  );
};
