import { citiesDomain } from './domain';
import { getCities, saveCity, removeCity } from './events';

const initialState = [];

export const $citiesStore = citiesDomain
  .createStore(initialState)
  .on(getCities, (_, cities) => [...cities])
  .on(saveCity, (state, city) => [...state, city])
  .on(removeCity, (state, cityName) => state.filter((storedCity) => storedCity.toLowerCase() !== cityName.toLowerCase()));
