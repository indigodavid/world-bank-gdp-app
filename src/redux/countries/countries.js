import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getCountriesFromAPI from '../../utils/getCountriesFromAPI';
import getCountryFromAPI from '../../utils/getCountryFromAPI';
import getGDP from '../../utils/getGDP';

const COUNTRIES = 'world-bank-gdp-app/countries';
const GET_COUNTRIES = `${COUNTRIES}/GET_COUNTRIES`;
const GET_COUNTRY = `${COUNTRIES}/GET_COUNTRY`;
const GET_GDP = `${COUNTRIES}/GET_GDP`;
const initialState = [];

const fetchCountries = createAsyncThunk(
  GET_COUNTRIES,
  async (regionCode) => {
    const response = await getCountriesFromAPI(regionCode);
    return response;
  },
);

const fetchCountry = createAsyncThunk(
  GET_COUNTRY,
  async (code) => {
    const response = await getCountryFromAPI(code);
    return response;
  },
);

const fetchCountryGDP = createAsyncThunk(
  GET_GDP,
  async (code) => {
    const response = await getGDP(code);
    return response;
  },
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => (
      action.payload.map((country) => ({
        ...country,
        gdp: [0],
        gdpStatus: 'idle',
      }))
    ));
    builder.addCase(fetchCountry.fulfilled, (state, action) => state.push(action.payload));
    builder.addCase(fetchCountryGDP.fulfilled, (state, action) => {
      if (action.payload) {
        const gdpValues = action.payload;
        const code = gdpValues[0].countryiso3code;
        return state.map((country) => {
          if (country.id === code) {
            const newCountry = {
              ...country,
              gdp: gdpValues,
              gdpStatus: 'idle',
            };
            return newCountry;
          }
          return country;
        });
      }
      return state;
    });
  },
});

export default countriesSlice.reducer;
export { fetchCountries, fetchCountry, fetchCountryGDP };
