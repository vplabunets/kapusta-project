import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
