import store from '../../configureStore';
import { fetchRegions, fetchGDP } from '../regions';

describe('Test regions reducers', () => {
  test('Check store initial status', () => {
    expect(store.getState().regions.length).toBe(0);
  });

  test('Fetch regions from API', async () => {
    await store.dispatch(fetchRegions());
    expect(store.getState().regions).toBeTruthy();
  });

  test('Fetch CountryGDP from Ecuador', async () => {
    await store.dispatch(fetchRegions());
    await store.dispatch(fetchGDP('LCN'));
    const region = store.getState().regions.find((region) => region.code === 'LCN');
    expect(region).toBeTruthy();
    expect(region.gdp[0]).toBeTruthy();
  });
});
