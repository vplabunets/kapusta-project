import axios from 'axios';

export const api = () =>
  (axios.defaults.baseURL =
    'https://kapusta-project-back-production.up.railway.app/api');

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
