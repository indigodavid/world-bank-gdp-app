import store from '../../configureStore';
import { fetchCountries, fetchCountryGDP } from '../countries';

describe('Test Countries reducers', () => {
  test('Check store initial status', () => {
    expect(store.getState().countries.length).toBe(0);
  });

  test('Fetch countries from API', async () => {
    await store.dispatch(fetchCountries());
    expect(store.getState().countries).toBeTruthy();
  });

  test('Fetch CountryGDP from Ecuador', async () => {
    await store.dispatch(fetchCountries());
    await store.dispatch(fetchCountryGDP('ECU'));
    const country = store.getState().countries.find((country) => country.id === 'ECU');
    expect(country).toBeTruthy();
    expect(country.gdp[0]).toBeTruthy();
  });
});
