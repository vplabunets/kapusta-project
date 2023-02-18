import Icons from 'images/icons-sprite.svg';

import { LeftCabbageWrapper, RightCabbageWrapper } from './Cabbage.styled';

export const Cabbage = ({ position }) => {
  if (position) {
    return (
      <RightCabbageWrapper>
        <svg alt="cabbage">
          <use href={`${Icons}#icon-cabbage-right`}></use>
        </svg>
        <div></div>
      </RightCabbageWrapper>
    );
  }

  return (
    <LeftCabbageWrapper>
      <svg alt="cabbage">
        <use href={`${Icons}#icon-cabbage-left`}></use>
      </svg>
      <div></div>
    </LeftCabbageWrapper>
  );
};
