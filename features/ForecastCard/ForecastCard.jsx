import React from 'react';
import styled from 'styled-components';
import { ForecastInfoTable } from './components/ForecastInfoTable';
import moment from 'moment';
import get from 'lodash/get';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const StyledForecastCard = styled.div`
  margin: 16px 0;
  padding: 0 18px 6px;

  background: ${props => props.theme.colors.white};

  display: flex;
  align-items: center;

  :first-of-type {
    margin-top: 0;
  }
`;

const CurrentWeatherInfo = styled.div`
  margin-right: 16px;
  width: 30%;

  display: flex;
  flex-direction: column;
`;

const H2 = styled.h2`
  margin-bottom: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Temp = styled.span`
  margin-left: 6px;

  display: inline-block;

  font-size: 36px;
`;

const DailyForecast = styled.div`
  margin-top: 20px;

  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-self: flex-start;
`;

const DailyForecastItem = styled.div`
  margin: 0 6px;

  display: flex;
  flex-direction: column;

  white-space: nowrap;
  text-align: center;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;

  display: block;
  margin: 0 auto;
`;

const getWeatherIcon = (weather) => {
  return `${publicRuntimeConfig.weatherApiIconBaseUrl}/${weather[0].icon}.png`;
} ;

export const ForecastCard = (props) => {
  const { day, isCurrentDay, forecastData, city } = props;

  return (
    <StyledForecastCard>
      <CurrentWeatherInfo>
        <H2>
          {day}
          <Temp>
            {get(forecastData, '[0].main.temp', 'N/A')}°C
          </Temp>
        </H2>
        <div>
          Wind: {get(forecastData, '[0].wind.speed', 'N/A')} km/h
          {isCurrentDay && (
            <ForecastInfoTable data={city} />
          )}
        </div>
      </CurrentWeatherInfo>
      <DailyForecast>
        {
          forecastData.map(day => (
            <DailyForecastItem key={day.dt_txt}>
              {moment(day.dt_txt).format('HH:MM A')}
              <Img src={getWeatherIcon(day.weather)} alt='weather icon' />
            </DailyForecastItem>
          ))
        }
      </DailyForecast>
    </StyledForecastCard>
  )
}
