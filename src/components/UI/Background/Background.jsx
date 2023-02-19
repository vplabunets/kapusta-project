import { Cabbage } from '../Cabbage/Cabbage';
import CabbageBackground from 'images/background/cabbagegroup.png';

import {
  BackgroundGrey,
  DesignWrapper,
  CabbageContainer,
} from './Background.styled';

export const Background = () => {
  return (
    <>
      <BackgroundGrey />
      <DesignWrapper>
        <img src={CabbageBackground} alt="cabbage group" />
      </DesignWrapper>
      <CabbageContainer>
        <Cabbage />
        <Cabbage position={true} />
      </CabbageContainer>
    </>
  );
};
