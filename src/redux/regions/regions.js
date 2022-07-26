import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getRegionsFromAPI from '../../utils/getRegionsFromAPI';

const GET_REGIONS = 'world-bank-gdp-app/regions/GET_REGIONS';
const initialState = [];

const fetchRegions = createAsyncThunk(
  GET_REGIONS,
  async () => {
    const response = await getRegionsFromAPI();
    return response;
  },
);

const regionsSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegions.fulfilled, (state, action) => action.payload);
  },
});

export default regionsSlice.reducer;
export { fetchRegions };
