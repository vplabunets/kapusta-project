import axios from 'axios';
import { store } from 'redux/store';
// import { useDispatch } from 'react-redux';
import { setToken, setTokenRefresh } from 'redux/auth/slice';

// export const api = () =>
//   (axios.defaults.baseURL =
// 'https://kapusta-project-back-production.up.railway.app/api');

// export const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// export const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

// // import { create } from '@mui/material/styles/createTransitions';
// import axios from 'axios';
// import { useSelector } from 'react-redux';
// import { selectAccessToken } from '../redux/auth/selectors';

// // export const api = () => (axios.defaults.baseURL = 'http://localhost:8080/api');

export const instans = axios.create({
  baseURL: 'http://localhost:4444/api',
});

export const setAuthHeader = token => {
  console.log('token', token);
  instans.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  instans.defaults.headers.common.Authorization = '';
};

// instans.interceptors.request.use(config => {
//   const accessToken = useSelector(selectAccessToken);
//   console.log(accessToken);
//   instans.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
//   return config;
// });

instans.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const { refreshToken } = JSON.parse(localStorage.getItem('persist:auth'));
      const { data } = await instans.post('/users/refresh', {
        refreshToken: JSON.parse(refreshToken),
      });
      console.log(data);
      const { dispatch } = store;
      // const dispatch = useDispatch();
      dispatch(setToken(data.accessToken));
      dispatch(setTokenRefresh(data.refreshToken));
      // const accessToken = useSelector(selectAccessToken);
      // console.log('accessToken2', accessToken);
      // const { data } = await axios.post('/users/refresh', { accessToken });
      // setAuthHeader(data.accessToken);
      // const dispatch = useDispatch();
      // dispatch(data.accessToken);
      console.log(error.config);

      error.config.headers.common.Authorization = `Bearer ${data.accessToken}`;
      return instans(error.config);
    }
    return Promise.reject(error);
    // return axios(error.config);
  }
);

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjhlYzFmZTMwM2IzNjI3OTJhYmJlNSIsImlhdCI6MTY3NzUzMTMwNSwiZXhwIjoxNjc3NTMxNDI1fQ.jxtkpQWrc8PgFG540-EiBmBblHk2JalPUKzyye-7vhs
