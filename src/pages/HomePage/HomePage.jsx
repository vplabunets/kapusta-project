import Icon from 'images/icons-sprite.svg';

import HomeAuthForm from 'components/HomeAuthForm/HomeAuthForm';
import { Cabbage } from 'components/UI/Cabbage/Cabbage';
import { AnimateBackground } from 'components/UI/AnimateBackground/AnimateBackground';
import {
  HomePageWrapper,
  TextGroup,
  CabbageContainer,
} from './HomePage.styled';
import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from 'redux/auth/slice';
import { refreshUser } from 'redux/auth/operations';
import { selectAccessToken } from 'redux/auth/selectors';

const HomePage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const reduxAccessToken = useSelector(selectAccessToken);
  // const search = useLocation().search;

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    // const refreshToken = searchParams.get('refreshToken');
    // const sid = searchParams.get('sid');

    if (!accessToken) {
      return;
    }

    dispatch(setToken(accessToken));
    dispatch(refreshUser());
    // dispatch(googleAuth({ accessToken, refreshToken, sid }));
    // dispatch(authOperations.getUserData());
  }, [dispatch, searchParams]);

  if (reduxAccessToken === '' || reduxAccessToken === null) {
    // const accessToken = new URLSearchParams(search).get('accessToken');
    // console.log(accessToken);
    // dispatch(setToken(accessToken));
  }
  // dispatch(refreshUser());

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <>
      <AnimateBackground />
      <HomePageWrapper>
        <TextGroup>
          <svg alt="mainLogo">
            <use href={`${Icon}#icon-logo-main`}></use>
          </svg>
          <p>Smart Finance</p>
        </TextGroup>
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
