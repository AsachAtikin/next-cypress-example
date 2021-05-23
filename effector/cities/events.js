import { citiesDomain } from './domain';

export const getCities = citiesDomain.createEvent();

export const saveCity = citiesDomain.createEvent();

export const removeCity = citiesDomain.createEvent();
