import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div``;

export const StyledInput = styled.input`
  height: 36px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid transparent;
  outline: none;

  background: ${props => props.theme.colors.gallery};

  display: block;

  font-size: 24px;

  transition: border 200ms ease-in-out;

  :hover {
    border-color: ${props => props.theme.colors.accentHover};
  }

  :focus {
    border-color: ${props => props.theme.colors.accent};
  }
`;

export const Error = styled.div`
  margin-top: 6px;

  color: ${props => props.theme.colors.error};
`;

export const Input = (props) => {
  const { error, className, ...rest } = props;

  return (
    <InputWrapper className={className}>
      <StyledInput {...rest} />
      {
        !!error && (
          <Error>
            {error}
          </Error>
        )
      }
    </InputWrapper>
  )
}
