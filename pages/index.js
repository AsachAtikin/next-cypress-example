import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Input } from 'components/ui/Input';
import { Button } from 'components/ui/Button';
import { useStore } from 'effector-react';
import { $forecastStore } from 'effector/forecast/store';
import { DefaultLayout } from 'components/layouts/DefaultLayout';

const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Cards = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const ButtonsWrapper = styled.div`
  margin-top: 24px;

  display: flex;
`;

const ButtonStyled = styled(Button)`
  display: flex;
  flex: 1;

  :first-of-type {
    margin-right: 12px;
  }
`;

export default function Home() {
  const [city, setCity] = useState('');
  const { error } = useStore($forecastStore);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push('[cityName]', city);
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <DefaultLayout>
      <h2>
        Get forecast by city name
      </h2>
      <Form onSubmit={handleSubmit}>
        <Input type='text' value={city} onChange={handleChange} error={error} />
        <ButtonsWrapper>
          <ButtonStyled type='submit'>Get weather</ButtonStyled>
        </ButtonsWrapper>
      </Form>
    </DefaultLayout>
  );
}
