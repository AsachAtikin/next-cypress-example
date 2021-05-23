import React from 'react';
import styled from 'styled-components';
import { CitiesList } from 'features/CitiesList';

const StyledDefaultLayout = styled.main`
  margin: 24px auto;
  max-width: ${props => props.theme.layout.containerWidth}px;

  display: flex;
  flex-direction: column;
`;

export const DefaultLayout = ({ children, className }) => {
  return (
    <>
      <CitiesList />
      <StyledDefaultLayout className={className}>
        {children}
      </StyledDefaultLayout>
    </>
  )
}

