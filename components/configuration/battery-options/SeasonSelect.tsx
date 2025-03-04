import React from 'react';
import styled from 'styled-components';
import { Button } from '../../ui/button';

const StyledConfortSelect = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const StyledConfortButton = styled(Button)`
  width: 40%;
`;

const SeasonSelect = () => {
  return (
    <StyledConfortSelect>
      <StyledConfortButton>wint</StyledConfortButton>
      <StyledConfortButton>summe</StyledConfortButton>
      <StyledConfortButton>autum</StyledConfortButton>
      <StyledConfortButton>spring</StyledConfortButton>
    </StyledConfortSelect>
  );
};

export default SeasonSelect;
