import { Cabbage } from '../Cabbage/Cabbage';
import { AnimateBackground } from '../AnimateBackground/AnimateBackground';

import { BackgroundGrey, CabbageContainer } from './Background.styled';

export const Background = () => {
  return (
    <>
      <BackgroundGrey />
      <AnimateBackground white={true} />
      <CabbageContainer>
        <Cabbage />
        <Cabbage position={true} />
      </CabbageContainer>
    </>
  );
};
