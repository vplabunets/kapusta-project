import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, setBalance } from './operations';

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
  reducers: {
    changeBalance(state, action) {
      state.balance = action.payload.user.balance;
      // if (action.payload.operation === 'income') {
      //   state.balance += action.payload.sum;
      //   return;
      // }
      // state.balance -= action.payload.sum;
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.error = false;
      state.isLoading = false;
      state.name = action.payload.userName;
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
      state.isLoading = false;
    },
    [setBalance.rejected](state, action) {
      state.error = action.payload.message;
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { changeBalance } = authSlice.actions;
