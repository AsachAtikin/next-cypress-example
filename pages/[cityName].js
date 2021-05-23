import React, { useMemo } from 'react';
import styled from 'styled-components';
import { DefaultLayout } from 'components/layouts/DefaultLayout';
import { useRouter } from 'next/router';
import { withStart } from 'effector-next';
import { useStore } from 'effector-react';
import { Forecast } from 'features/Forecast';
import { clearForecast, getForecastFx } from 'effector/forecast/events';
import { $citiesStore } from 'effector/cities/store';
import { removeCity } from 'effector/cities/events';
import { ToIndexButton, LinkStyled } from 'components/ui/ToIndexButton';
import { Loader } from 'components/ui/Loader';
import { isServer } from 'helpers/isServer';

const ButtonsWrapper = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

const enhance = withStart();

const CityPage = ({ cityName }) => {
  const cities = useStore($citiesStore);

  const isLoading = useStore(getForecastFx.pending);

  const router = useRouter();

  const isCityInList = useMemo(
    () => cities.find((storedCity) => storedCity.toLowerCase() === cityName.toLowerCase()),
    [cities, cityName],
  );

  const handleRemoveCity = () => {
    removeCity(cityName);
    clearForecast();

    router.push('/');
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <Loader />
      );
    }

    return (
      <>
        <ButtonsWrapper>
          <ToIndexButton />
          {
            isCityInList ? (
              <LinkStyled as='button' onClick={() => handleRemoveCity()}>
                ❌ Remove city
              </LinkStyled>
            ) : null
          }
        </ButtonsWrapper>
        <Forecast city={cityName} />
      </>
    );
  };

  return (
    <DefaultLayout>
      {renderContent()}
    </DefaultLayout>
  );
};

CityPage.getInitialProps = async ({ query }) => {
  if (isServer()) {
    await getForecastFx({ q: query.cityName });
  } else {
    getForecastFx({ q: query.cityName });
  }

  return { cityName: query.cityName };
};

export default enhance(CityPage);
