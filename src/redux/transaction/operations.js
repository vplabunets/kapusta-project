import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { changeBalance } from '../auth/slice';

export const getSummary = createAsyncThunk(
  'transactions/summary',
  async (credentials, { rejectWithValue }) => {
    try {
      const result = await axios.post('/transaction/summary', credentials);
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getTransactionsByOperation = createAsyncThunk(
  'transactions/operation',
  async (credentials, { rejectWithValue }) => {
    try {
      console.log(credentials);
      const result = await axios.post('/transaction/operation', credentials);
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const addTransaction = createAsyncThunk(
  'transactions/addOperation',
  async (credentials, { rejectWithValue, dispatch }) => {
    dispatch(changeBalance(credentials));
    try {
      const result = await axios.post('/transaction/new', credentials);
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteOperation',
  async (transactionId, { rejectWithValue, dispatch }) => {
    try {
      const result = await axios.delete(`/transaction/delete/${transactionId}`);
      dispatch(changeBalance(result));
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
