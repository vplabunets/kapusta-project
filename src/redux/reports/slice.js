import { createSlice } from '@reduxjs/toolkit';
import {
  getAllSummaryReports,
  getCategoryReports,
  getItemsCategoryReports,
} from './operations';

const initialState = {
  allSummaryReports: [],
  categoryReports: [],
  itemsByCategory: [],
  currentPeriod: { month: '', year: '' },
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
  },
  extraReducers: {
    [getAllSummaryReports.fulfilled]: (state, action) => {
      state.allSummaryReports = action.payload;
      state.isLoading = false;
      state.skelet = false;
    },
    [getAllSummaryReports.rejected](state, action) {
      state.error = action.payload.message;
      state.isLoading = false;
    },
    [getAllSummaryReports.pending](state) {
      // state.isLoading = true;
      state.skelet = true;
    },
    [getCategoryReports.fulfilled]: (state, action) => {
      state.categoryReports = action.payload;
      state.isLoading = false;
    },
    [getCategoryReports.rejected](state, action) {
      state.error = action.payload.message;
      state.isLoading = false;
    },
    [getCategoryReports.pending](state) {
      state.isLoading = true;
    },
    [getItemsCategoryReports.fulfilled]: (state, action) => {
      state.itemsByCategory = action.payload;
      state.isLoading = false;
    },
    [getItemsCategoryReports.rejected](state, action) {
      state.error = action.payload.message;
      state.isLoading = false;
    },
    [getItemsCategoryReports.pending](state) {
      state.isLoading = true;
    },
  },
});

export const reportsReducer = reportsSlice.reducer;
export const { setCurrentPeriod } = reportsSlice.actions;
