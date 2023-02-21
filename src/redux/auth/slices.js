import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
const initialState = {
  email: '',
  token: '',
  isLoggedIn: false,
  balance: 0,
  error: null,
  loading: false,
  //   status: '',
  //   isRefreshing: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [register.fulfilled]: state => {
      state.error = false;
      state.loading = false;
    },
    [register.rejected](state) {
      state.error = true;
      state.loading = false;
    },
    [register.pending](state) {
      state.loading = true;
    },
    [logIn.fulfilled](state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.balance = action.payload.balance;
      state.isLoggedIn = true;
      state.error = false;
      state.loading = false;
    },
    [logIn.rejected](state) {
      state.error = true;
      state.loading = false;
    },
    [logIn.pending](state) {
      state.loading = true;
    },
    [logOut.fulfilled](state) {
      state.email = '';
      state.token = null;
      state.isLoggedIn = false;
      state.loading = false;
    },

    [logOut.pending](state) {
      state.loading = true;
    },
    [refreshUser.pending](state) {
      state.loading = true;
      //   state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.balance = action.payload.balance;
      state.isLoggedIn = true;
      state.loading = false;
      //   state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.loading = false;
      //   state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
