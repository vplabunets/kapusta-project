import axios from 'axios';
import { store } from 'redux/store';

import { setToken, setTokenRefresh } from 'redux/auth/slice';

export const instans = axios.create({
  baseURL: 'https://kapusta-project-back-production.up.railway.app/api',
});

export const setAuthHeader = token => {
  //console.log('instans.defaults.', instans.defaults);
  instans.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  instans.defaults.headers.common.Authorization = '';
};

instans.interceptors.response.use(
  config => config,
  async error => {
    if (error.response.status === 401) {
      const { refreshToken } = JSON.parse(localStorage.getItem('persist:auth'));
      try {
        const { data } = await instans.post('/users/refresh', {
          refreshToken: JSON.parse(refreshToken),
        });

        const { dispatch } = store;

        dispatch(setToken(data.accessToken));
        dispatch(setTokenRefresh(data.refreshToken));

        error.config.headers.Authorization = `Bearer ${data.accessToken}`;
        setAuthHeader(data.accessToken);

        return instans(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
