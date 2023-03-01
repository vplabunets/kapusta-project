import { createAsyncThunk } from '@reduxjs/toolkit';
import { instans } from 'utils/axiosDefault';

import { changeBalance, resetFirstBalance, resetBalance } from '../auth/slice';

import { toast } from 'react-toastify';

export const getSummary = createAsyncThunk(
  'transactions/summary',
  async (credentials, { rejectWithValue }) => {
    try {
      const result = await instans.post('/transaction/summary', credentials);
      return result.data;
    } catch (error) {
      if (error.message === 'Network Error') {
        toast.error('Something went wrong, please try again later');
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getTransactionsByOperation = createAsyncThunk(
  'transactions/operation',
  async (credentials, { rejectWithValue }) => {
    try {
      const result = await instans.post('/transaction/operation', credentials);
      return result.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      return rejectWithValue(error.response.data);
    }
  }
);
export const addTransaction = createAsyncThunk(
  'transactions/addOperation',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const result = await instans.post('/transaction/new', credentials);

      dispatch(changeBalance(result.data));
      toast.success('Operation added successfully');
      return result.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteOperation',
  async (transactionId, { rejectWithValue, dispatch }) => {
    try {
      const result = await instans.delete(
        `/transaction/delete/${transactionId}`
      );
      dispatch(changeBalance(result.data));
      toast.info('Operation deleted successfully');
      return result.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      return rejectWithValue(error.response.data);
    }
  }
);

export const resetAll = createAsyncThunk(
  'transactions/resetAll',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const result = await instans.delete(`/transaction/delete-all`);
      toast.info('All was reset successfully');
      dispatch(resetFirstBalance(result.data.firstBalance));
      dispatch(resetBalance(result.data.balance));
      return result.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      return rejectWithValue(error.response.data);
    }
  }
);
