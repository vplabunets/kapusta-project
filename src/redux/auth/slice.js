import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  setBalance,
  resetPassword,
} from './operations';

const initialState = {
  name: '',
  email: '',
  accessToken: '',
  isLoggedIn: false,
  balance: 0,
  error: null,
  isLoading: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeBalance(state, action) {
      state.balance = action.payload.user.balance;
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
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
      state.accessToken = action.payload.accessToken;
      state.balance = action.payload.balance;
      state.name = action.payload.userName;
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
      state.accessToken = null;
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
      state.accessToken = action.payload.accessToken;
      state.balance = action.payload.balance;
      state.name = action.payload.userName;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state, action) {
      state.error = action.payload.message;
      state.isRefreshing = false;
    },
    [setBalance.pending](state) {
      state.isLoading = true;
    },
    [setBalance.fulfilled](state, action) {
      state.balance = action.payload.balance;
      state.isLoading = false;
    },
    [setBalance.rejected](state, action) {
      state.error = action.payload.message;
      state.isRefreshing = false;
    },
    [resetPassword.pending](state) {
      state.isLoading = true;
    },
    [resetPassword.fulfilled](state) {
      state.isLoading = false;
    },
    [resetPassword.rejected](state) {
      state.isLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { changeBalance } = authSlice.actions;
