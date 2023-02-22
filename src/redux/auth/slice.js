import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  name: '',
  email: '',
  token: '',
  isLoggedIn: false,
  balance: 0,
  error: null,
  isLoading: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: state => {
      state.error = false;
      state.isLoading = false;
    },
    [register.rejected](state, action) {
      state.error = action.payload.message;
      state.isLoading = false;
    },
    [register.pending](state) {
      state.isLoading = true;
    },
    [logIn.fulfilled](state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.balance = action.payload.balance;
      state.isLoggedIn = true;
      state.error = false;
      state.isLoading = false;
    },
    [logIn.rejected](state, action) {
      state.error = action.payload.message;
      state.isLoading = false;
    },
    [logIn.pending](state) {
      state.isLoading = true;
    },
    [logOut.fulfilled](state) {
      state.email = '';
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },

    [logOut.pending](state) {
      state.isLoading = true;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.balance = action.payload.balance;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state, action) {
      state.error = action.payload.message;
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
