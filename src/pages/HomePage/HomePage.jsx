import Icon from 'images/icons-sprite.svg';

import HomeAuthForm from 'components/HomeAuthForm/HomeAuthForm';
import { Cabbage } from 'components/UI/Cabbage/Cabbage';
import CabbageBackground from 'images/background/cabbagegroup.png';

import {
  BackgroundGrey,
  DesignWrapper,
  HomePageWrapper,
  TextGroup,
  CabbageContainer,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <BackgroundGrey />
      <DesignWrapper>
        <svg alt="cabbage">
          <use href={`${Icon}#icon-cabbage-left`}></use>
        </svg>
        <img src={CabbageBackground} alt="cabbage group" />
      </DesignWrapper>
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
