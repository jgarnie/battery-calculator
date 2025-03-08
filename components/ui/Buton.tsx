import React from 'react';

type ButtonProps = {
  onClick?: (value: number, label?: string) => void;
  $isActive?: boolean;
  children?: React.ReactNode;
  className?: string;
  $disabled?: boolean;
  value: number;
  label?: string;
};

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
    <button
      onClick={() => onClick?.(value, label)}
      disabled={$disabled}
      className={`px-4 py-2 rounded-lg transition-colors flex justify-center  ${
        $isActive
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 text-black hover:bg-gray-300'
      } ${
        $disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      } ${className}`}
    >
      {children}
    </button>
  );
};
