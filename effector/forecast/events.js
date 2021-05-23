import { groupBy } from 'lodash';
import moment from 'moment';
import api from 'axios';
import { forecastDomain } from './domain';

export const getForecastFx = forecastDomain.createEffect(async (params) => {
  try {
    const { data } = await api.get('/weather', {
      params,
    });

    const groupedForecastByDays = groupBy(
      data.list,
      (forecast) => moment(forecast.dt_txt).format('dddd'),
    );

    return {
      ...data,
      list: groupedForecastByDays,
    };
  } catch (error) {
    return Promise.reject(error.message);
  }
});

export const clearForecast = forecastDomain.createEvent();
