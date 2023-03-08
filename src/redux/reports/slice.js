import { createSlice } from '@reduxjs/toolkit';

import { getReports } from './operations';

const initialState = {
  allSummaryReports: [],
  categoryReports: [],
  itemsByCategory: [],
  currentPeriod: { month: '', year: '' },
  category: '',
  error: null,
  isLoading: false,
  skelet: false,
};

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    setCurrentPeriod(state, action) {
      state.currentPeriod = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setCategoryReports(state, action) {
      state.categoryReports = action.payload;
    },
  },
  extraReducers: {
    [getReports.fulfilled]: (state, action) => {
      state.allSummaryReports = action.payload[0].allSummaryReports;
      state.categoryReports = action.payload[0].categoryReports;
      state.itemsByCategory = action.payload[0].itemsCategoryReports;
      state.isLoading = false;
      state.skelet = false;
    },
    [getReports.rejected](state, action) {
      state.error = action.payload.message;
      state.isLoading = false;
    },
    [getReports.pending](state) {
      state.isLoading = true;
      state.skelet = true;
    },
  },
});

export const reportsReducer = reportsSlice.reducer;
export const { setCurrentPeriod, setCategory, setCategoryReports } =
  reportsSlice.actions;
