import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { googleAuth } from 'redux/auth/slice';

export const GooglePage = () => {
  const { accessToken } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) return dispatch(googleAuth(accessToken));
  });

  return <div>Loading...</div>;
};
