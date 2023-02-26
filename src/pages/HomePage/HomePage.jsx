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
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from 'redux/auth/slice';
import { refreshUser } from 'redux/auth/operations';
import { selectAccessToken } from 'redux/auth/selectors';

const HomePage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const reduxAccessToken = useSelector(selectAccessToken);

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    if (!accessToken) {
      return;
    }

    dispatch(setToken(accessToken));
    dispatch(refreshUser());
  }, [dispatch, searchParams]);

  if (reduxAccessToken === '' || reduxAccessToken === null) {
  }

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
