import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  height: 36px;

  display: block;

  font-size: 24px;
  text-align: center;
`;

export const Button = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  )
};
