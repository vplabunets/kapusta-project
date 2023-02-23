import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { setAuthHeader, clearAuthHeader, api } from 'utils/axiosDefault';

api();

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      await axios.post('/users/register', credentials);
      toast.info('Registration successful! Please confirm your email', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
        pauseOnHover: true,
      });
    } catch (error) {
      const errNot = error.response.data.message;
      if (
        errNot === 'The email is already taken by another user, try logging in '
      ) {
        toast.error('This email is already used', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'colored',
          pauseOnHover: true,
        });
      }

      if (errNot === 'Email is not verified') {
        toast.warning('Your email is not verified, please check your email', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'colored',
          pauseOnHover: true,
        });
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      console.log(res.data);
      console.log('token: ', res.data.token);
      return res.data;
    } catch (error) {
      const errNot = error.response.data.message;
      if (errNot === 'Invalid email address or password') {
        toast.warning('Your email or password is wrong', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'colored',
          pauseOnHover: true,
        });
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.patch('/users/logout');
      clearAuthHeader();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/get-user');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const setBalance = createAsyncThunk(
  'auth/setBalance',
  async (balance, { rejectWithValue }) => {
    try {
      const result = await axios.patch('/users/balance', balance);
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);