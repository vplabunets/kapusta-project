import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { setAuthHeader, clearAuthHeader, instans } from 'utils/axiosDefault';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      await instans.post('/users/register', credentials);
      toast.info('Registration successful! Please confirm your email');
    } catch (error) {
      const errNot = error.response.data.message;

      if (errNot === 'Email verified, and already registered') {
        toast.error('This email is already used');
      }

      if (errNot === 'Email is not verified, but already registered') {
        toast.warning(
          'Your email is not verified, but already registered. To complete registration please check your email'
        );
      }
      if (error.message === 'Network Error') {
        toast.error('Something went wrong, please try again later');
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await instans.post('/users/login', credentials);
      setAuthHeader(res.data.accessToken);
      return res.data;
    } catch (error) {
      const errNot = error.response.data.message;
      if (errNot === 'Invalid email address or password') {
        toast.error('Your email or password is wrong, check it and try again');
      }
      if (errNot.includes('Please confirm the mail')) {
        toast.warning(
          'Your email has not been verified, please confirm you email and try again'
        );
      }
      if (error.message === 'Network Error') {
        toast.error('Something went wrong, please try again later');
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await instans.patch('/users/logout');
      clearAuthHeader();
    } catch (error) {
      if (error.message === 'Network Error') {
        toast.error('Something went wrong, please try again later');
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await instans.get('/users/get-user');
      return res.data;
    } catch (error) {
      if (error.message === 'Network Error') {
        toast.error('Something went wrong, please try again later');
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const setBalance = createAsyncThunk(
  'auth/setBalance',
  async (balance, { rejectWithValue }) => {
    try {
      const result = await instans.patch('/users/balance', balance);
      toast.success('Balance added successfully');
      return result.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      return rejectWithValue(error.response.data);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (email, { rejectWithValue }) => {
    try {
      const response = await instans.post('/users/refresh-password', email);
      toast.info('Your new password successfully sent to your email');
      return response.data;
    } catch (error) {
      if (error.message === 'Network Error') {
        toast.error('Something went wrong, please try again later');
      }
      const errNot = error.response.data.message;
      if (errNot.includes('Please confirm the mail')) {
        toast.warning(
          'First you need to verify your email, check you email box'
        );
      }
      if (errNot.includes('User with this email')) {
        toast.warning('No user with this email, please register');
      }
      return rejectWithValue(error.response.data);
    }
  }
);

// export const logOut = createAsyncThunk(
//   'auth/logout',
//   async (_, { rejectWithValue }) => {
//     try {
//       await instans.patch('/users/logout');
//       clearAuthHeader();
//     } catch (error) {
//       if (error.message === 'Network Error') {
//         toast.error('Something went wrong, please try again later');
//       }
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const changeFirstVisit = createAsyncThunk(
  'auth/changeFirstVisit',
  async (_, { rejectWithValue }) => {
    try {
      const result = await instans.post('/users/first-visit');
      toast.success('First visit done');
      return result.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      return rejectWithValue(error.response.data);
    }
  }
);

export const changeFirstBalance = createAsyncThunk(
  'auth/changeFirstBalance',
  async (_, { rejectWithValue }) => {
    try {
      const result = await instans.post('/users/first-balance');
      toast.success('Fist balance entered');
      return result.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      return rejectWithValue(error.response.data);
    }
  }
);

export const userUpdate = createAsyncThunk(
  'auth/userUpdate',
  async (credentials, { rejectWithValue }) => {
    try {
      const result = await instans.patch('/users/update-user', credentials);
      toast.success('The user information was successfully updated!');
      return result.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      return rejectWithValue(error.response.data);
    }
  }
);
