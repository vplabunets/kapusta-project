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
