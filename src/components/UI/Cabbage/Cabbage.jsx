import icons from 'images/icons-sprite.svg';

import {
  LeftCabbageWrapper,
  RightCabbageWrapper,
  Item,
} from './Cabbage.styled';

export const Cabbage = ({ position }) => {
  if (position) {
    return (
      <RightCabbageWrapper>
        <svg alt="cabbage">
          <use href={`${icons}#icon-cabbage-right`}></use>
        </svg>
        <div></div>
      </RightCabbageWrapper>
    );
  }

  return (
    <LeftCabbageWrapper>
      <svg alt="cabbage">
        <use href={`${icons}#icon-cabbage-left`}></use>
      </svg>
      <div></div>
    </LeftCabbageWrapper>
  );
};

export const CabbageList = () => {
  return (
    <ul>
      <Item>
        <svg width="83" height="85">
          <use href={`${icons}#icon-cabbage-left`}></use>
        </svg>
      </Item>
      <Item>
        <svg width="83" height="85">
          <use href={`${icons}#icon-cabbage-left`}></use>
        </svg>
      </Item>
      <Item>
        <svg width="83" height="85">
          <use href={`${icons}#icon-cabbage-left`}></use>
        </svg>
      </Item>
      <Item>
        <svg width="83" height="85">
          <use href={`${icons}#icon-cabbage-left`}></use>
        </svg>
      </Item>
      <Item>
        <svg width="83" height="85">
          <use href={`${icons}#icon-cabbage-left`}></use>
        </svg>
      </Item>
      <Item>
        <svg width="83" height="85">
          <use href={`${icons}#icon-cabbage-left`}></use>
        </svg>
      </Item>
      <Item>
        <svg width="83" height="85">
          <use href={`${icons}#icon-cabbage-left`}></use>
        </svg>
      </Item>
      <Item>
        <svg width="83" height="85">
          <use href={`${icons}#icon-cabbage-left`}></use>
        </svg>
      </Item>
      <Item>
        <svg width="83" height="85">
          <use href={`${icons}#icon-cabbage-left`}></use>
        </svg>
      </Item>
      <Item>
        <svg width="83" height="85">
          <use href={`${icons}#icon-cabbage-left`}></use>
        </svg>
      </Item>
      <Item>
        <svg width="83" height="85">
          <use href={`${icons}#icon-cabbage-left`}></use>
        </svg>
      </Item>
      <Item>
        <svg width="83" height="85">
          <use href={`${icons}#icon-cabbage-left`}></use>
        </svg>
      </Item>
      <Item>
        <svg width="83" height="85">
          <use href={`${icons}#icon-cabbage-left`}></use>
        </svg>
      </Item>
      <Item>
        <svg width="83" height="85">
          <use href={`${icons}#icon-cabbage-left`}></use>
        </svg>
      </Item>
      <Item>
        <svg width="83" height="85">
          <use href={`${icons}#icon-cabbage-left`}></use>
        </svg>
      </Item>
      <Item>
        <svg width="83" height="85">
          <use href={`${icons}#icon-cabbage-left`}></use>
        </svg>
      </Item>
    </ul>
  );
};
