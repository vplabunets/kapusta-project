import { createSlice } from '@reduxjs/toolkit';
import { getSummary, getTransactionsByOperation } from './operations';

const initialState = {
  transactions: [],
  summary: [],
  error: null,
  isLoading: false,
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [getSummary.fulfilled]: (state, action) => {
      state.summary = action.payload;
      state.isLoading = false;
    },
    [getSummary.rejected](state, action) {
      state.error = action.payload.message;
      state.isLoading = false;
    },
    [getSummary.pending](state) {
      state.isLoading = true;
    },
    [getTransactionsByOperation.fulfilled]: (state, action) => {
      state.transactions = action.payload;
      state.isLoading = false;
    },
    [getTransactionsByOperation.rejected](state, action) {
      state.error = action.payload.message;
      state.isLoading = false;
    },
    [getTransactionsByOperation.pending](state) {
      state.isLoading = true;
    },
  },
});

export const transactionReducer = transactionSlice.reducer;
