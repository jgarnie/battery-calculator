import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  onClick?: (value: number, label?: string) => void;
  $isActive?: boolean;
  children?: React.ReactNode;
  className?: string;
  $disabled?: boolean;
  value: number;
  label?: string;
};

const StyledButton = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 33%;
  min-width: 30%;
  background-color: ${({ theme }) =>
    `linear-gradient(to right, ${theme.color.background}, ${theme.color.primary} 40%, ${theme.color.emphasis} 800px)`};
`;

export const Button: React.FC<ButtonProps> = ({
  onClick,
  $isActive = false,
  children,
  className = '',
  $disabled = false,
  value = 0,
  label = '',
}) => {
  return (
    <StyledButton onClick={() => onClick?.(value, label)} disabled={$disabled}>
      {children}
    </StyledButton>
  );
};
