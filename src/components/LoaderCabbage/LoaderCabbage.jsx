import React from 'react';
import { Loader } from './LoaderCabbage.styled';

import icon from 'images/icons-sprite.svg';
import { BtnStyle1, BtnStyle2, BtnStyle3, Load } from './LoaderCabbage.styled';

const LoaderCabbage = () => {
  return (
    <Loader>
      <BtnStyle1>
        <Load alt="cabbage" width={50} height={50}>
          <use href={`${icon}#icon-cabbage-2`}></use>
        </Load>
      </BtnStyle1>
      <BtnStyle2>
        <Load alt="cabbage" width={50} height={50}>
          <use href={`${icon}#icon-cabbage-2`}></use>
        </Load>
      </BtnStyle2>
      <BtnStyle3>
        <Load alt="cabbage" width={50} height={50}>
          <use href={`${icon}#icon-cabbage-2`}></use>
        </Load>
      </BtnStyle3>
    </Loader>
  );
};

export default LoaderCabbage;
