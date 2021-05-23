import React, { useEffect } from 'react';
import { getCities, saveCity, removeCity } from 'effector/cities/events';
import { $citiesStore } from 'effector/cities/store';

export const CITIES_LIST_LC_KEY = 'cities_list';

const storeToLC = data => window?.localStorage.setItem(CITIES_LIST_LC_KEY, JSON.stringify(data));

export const withSavedCities = (WrappedComponent) => {
  const Component = props => {
    useEffect(() => {
      let cities 
      try {
        cities = JSON.parse(localStorage.getItem(CITIES_LIST_LC_KEY));
      } catch (error) {
        console.error(error);
      }

      getCities(cities || []);

      $citiesStore.watch(saveCity, storeToLC);

      $citiesStore.watch(removeCity, storeToLC);
    }, []);

    return (
      <WrappedComponent {...props} />
    );
  };

  return Component;
};