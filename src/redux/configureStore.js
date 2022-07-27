import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import countriesReducer, { fetchCountries } from './countries/countries';
import regionsReducer, { fetchRegions } from './regions/regions';

const rootReducer = combineReducers({
  regions: regionsReducer,
  countries: countriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

store.dispatch(fetchCountries());
store.dispatch(fetchRegions());

export default store;
