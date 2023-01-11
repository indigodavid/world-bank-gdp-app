/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setCurrent: (state, action) => { state.current = action.payload; },
    clearCurrent: (state) => { state.current = ''; },
  },
});

export default searchSlice.reducer;
export { searchSlice };
