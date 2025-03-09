import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.h4``;

export const Label = ({ label }: { label: string }) => {
  return (
    <StyledLabel className="text-[10px]  landscape:text-[10px]  md:landscape:text-2xl  ">
      {label}
    </StyledLabel>
  );
};
