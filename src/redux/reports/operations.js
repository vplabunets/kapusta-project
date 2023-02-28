import { createAsyncThunk } from '@reduxjs/toolkit';
import { instans } from 'utils/axiosDefault';

export const getAllSummaryReports = createAsyncThunk(
  'reports/allSummaryReports',
  async (credentials, { rejectWithValue }) => {
    try {
      const result = await instans.post(
        '/transaction/all-summary-reports',
        credentials
      );

      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getCategoryReports = createAsyncThunk(
  'reports/categoryReports',
  async (credentials, { rejectWithValue }) => {
    try {
      const result = await instans.post(
        '/transaction/category-reports',
        credentials
      );

      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getItemsCategoryReports = createAsyncThunk(
  'reports/itemsCategoryReports',
  async (credentials, { rejectWithValue }) => {
    try {
      const result = await instans.post(
        '/transaction/items-category-reports',
        credentials
      );
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
