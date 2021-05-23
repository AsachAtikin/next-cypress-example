import React from 'react';
import styled from 'styled-components';
import { ForecastCard } from 'features/ForecastCard';
import { Button } from 'components/ui/Button';
import { useStore } from 'effector-react';
import { $citiesStore } from 'effector/cities/store';
import { $forecastStore } from 'effector/forecast/store';
import { saveCity } from 'effector/cities/events';

export const Cards = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Forecast = () => {
  const cities = useStore($citiesStore);
  const { forecast } = useStore($forecastStore);

  if (!!forecast) {
    const city = forecast.city.name;

    return (
      <>
        <h2>{city}</h2>
        <Cards>
          {
            Object.entries(forecast.list).map((dailyForecast, i) => {
              const [day, data] = dailyForecast;

              return (
                <ForecastCard
                  key={day}
                  day={day}
                  forecastData={data}
                  city={forecast.city}
                  isCurrentDay={i === 0}
                />
              )
            })
          }
          <Button
            onClick={() => saveCity(city)}
            disabled={cities.includes(city)}
          >
            Save location
          </Button>
        </Cards>
      </>
    )
  }

  return null;
}
