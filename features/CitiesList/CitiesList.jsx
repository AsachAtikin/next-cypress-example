import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useStore } from 'effector-react';
import { $citiesStore } from 'effector/cities/store';

const StyledCitiesList = styled.header`
  position: sticky;
  top: 0;

  background: ${props => props.theme.colors.mineShaftDarker};
`;

const Ul = styled.ul`
  margin: 0 auto;
  padding: 0;
  width: ${props => props.theme.layout.containerWidth}px;

  overflow-x: auto;

  display: flex;
  justify-content: space-around;

  list-style-type: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Li = styled.li`
  margin: 0;
  padding: 12px 6px;

  display: flex;

  list-style-type: none;
`;

const LinkStyled = styled.a`
  color: ${props => props.theme.colors.white};
  text-decoration: none;

  transition: border 200ms ease-in-out;

  :hover {
    color: ${props => props.theme.colors.accentHover};
  }

  :focus {
    color: ${props => props.theme.colors.accent};
  }
`;

export const CitiesList = ({ className }) => {
  const cities = useStore($citiesStore);

  return (
    <StyledCitiesList className={className}>
      <Ul>
        {cities.map((city, i) => (
          <Li key={i}>
            <Link href={`/${city}`} passHref>
              <LinkStyled>{city}</LinkStyled>
            </Link>
          </Li>
        ))}
      </Ul>
    </StyledCitiesList>
  )
}
