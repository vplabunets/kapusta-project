import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { motion } from 'framer-motion';

import { setToken, setTokenRefresh } from 'redux/auth/slice';
import { refreshUser } from 'redux/auth/operations';
import { selectAccessToken } from 'redux/auth/selectors';

import Icon from 'images/icons-sprite.svg';

import HomeAuthForm from 'components/HomeAuthForm/HomeAuthForm';
import { Cabbage } from 'components/UI/Cabbage/Cabbage';
import { AnimateBackground } from 'components/UI/AnimateBackground/AnimateBackground';

import {
  HomePageWrapper,
  TextGroup,
  CabbageContainer,
} from './HomePage.styled';

const HomePage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const reduxAccessToken = useSelector(selectAccessToken);

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');

    if (!accessToken && !refreshToken) {
      return;
    }

    dispatch(setToken(accessToken));
    dispatch(setTokenRefresh(refreshToken));
    dispatch(refreshUser());
  }, [dispatch, searchParams]);

  if (reduxAccessToken === '' || reduxAccessToken === null) {
  }

  return (
    <>
      <AnimateBackground />
      <HomePageWrapper>
        <motion.div
          initial={{ opacity: 0, translateX: -500, rotate: 360 }}
          animate={{ opacity: 1, translateX: 0, rotate: 0 }}
          transition={{ duration: 0.7 }}
        >
          <TextGroup>
            <svg alt="mainLogo">
              <use href={`${Icon}#icon-logo-main`}></use>
            </svg>
            <p>Smart Finance</p>
          </TextGroup>
        </motion.div>
        <HomeAuthForm />
      </HomePageWrapper>
      <CabbageContainer>
        <Cabbage />
        <Cabbage position={true} />
      </CabbageContainer>
    </>
  );
};

export default HomePage;
