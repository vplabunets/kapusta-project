import { createAsyncThunk } from '@reduxjs/toolkit';
import { instans } from 'utils/axiosDefault';

export const getReports = createAsyncThunk(
  'reports/getReports',
  async (credentials, { rejectWithValue }) => {
    try {
      const result = await instans.post(
        '/transaction/all-reports',
        credentials
      );
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
