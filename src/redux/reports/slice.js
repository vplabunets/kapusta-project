import { createSlice } from '@reduxjs/toolkit';

import { getReports } from './operations';

const initialState = {
  allSummaryReports: [
    { operation: 'expenses', sum: 0 },
    { operation: 'income', sum: 0 },
  ],
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
      !action.payload[0].allSummaryReports.length &&
        (state.allSummaryReports = [
          { operation: 'expenses', sum: 0 },
          { operation: 'income', sum: 0 },
        ]);

      action.payload[0].allSummaryReports.length === 1 &&
        (state.allSummaryReports = state.allSummaryReports.map(item => {
          if (
            item.operation === action.payload[0].allSummaryReports[0].operation
          ) {
            const newObj = {
              operation: item.operation,
              sum: action.payload[0].allSummaryReports[0].sum,
            };
            return newObj;
          }
          const newObj = {
            operation: item.operation,
            sum: 0,
          };
          return newObj;
        }));
      action.payload[0].allSummaryReports.length === 2 &&
        (state.allSummaryReports = action.payload[0].allSummaryReports);
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
