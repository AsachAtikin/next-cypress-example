import { forecastDomain } from './domain';
import { getForecastFx, clearForecast } from './events';

const initialState = {
  forecast: null,
  error: null,
};

export const $forecastStore = forecastDomain
  .createStore(initialState)
  .on(getForecastFx.doneData, (_, forecast) => ({
    ...initialState,
    forecast,
  }))
  .on(getForecastFx.fail, (_, { error }) => ({
    ...initialState,
    error,
  }))
  .on(clearForecast, () => initialState);
