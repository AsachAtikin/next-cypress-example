import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export const LinkStyled = styled.a`
  padding: 6px 12px;
  border: 1px solid ${props => props.theme.colors.accent};
  border-radius: 4px;

  font-size: 18px;
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  
  transition: all 200ms ease-in-out;

  :hover {
    background: ${props => props.theme.colors.accentHover};

    color: ${props => props.theme.colors.mineShaft};
  }

  :focus {
    border: 1px solid ${props => props.theme.colors.accentFocus};

    background: ${props => props.theme.colors.accentFocus};
  }
`;

export const ToIndexButton = (props) => {
  return (
    <div {...props}>
      <Link href='/' passHref>
        <LinkStyled>👈🏻 Back to index</LinkStyled>
      </Link>
    </div>
  )
}
