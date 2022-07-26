import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import regionsReducer, { fetchRegions } from './regions/regions';

const rootReducer = combineReducers({
  regions: regionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

store.dispatch(fetchRegions());

export default store;
