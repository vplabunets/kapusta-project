import { createSlice } from '@reduxjs/toolkit';
import { getSummary } from './operations';

const initialState = {
  transactions: [],
  summary: [],
  error: null,
  loading: false,
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [getSummary.fulfilled]: (state, action) => {
      state.summary = action.payload.summary;
      state.loading = false;
    },
    [getSummary.rejected](state, action) {
      state.error = action.payload.message;
      state.loading = false;
    },
    [getSummary.pending](state) {
      state.loading = true;
    },
  },
});

export const transactionReducer = transactionSlice.reducer;
