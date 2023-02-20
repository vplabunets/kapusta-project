import Balance from 'components/Balance/Balance';
import {
  AddOperationsModal,
  Wrapper,
} from 'components/OperationsBalanceContainer/OperationsBalanceContainer.styled';
import OperationsForwardToReports from 'components/OperationsForwardToReports/OperationsForwardToReports';
import React from 'react';
import IconPlus from 'images/icons-sprite.svg';

const OperationsBalanceContainer = () => {
  return (
    <Wrapper>
      <OperationsForwardToReports />
      <Balance />
      <AddOperationsModal>
        <svg alt="exit" width={25} height={25}>
          <use href={`${IconPlus}#icon-plus`}></use>
        </svg>
      </AddOperationsModal>
    </Wrapper>
  );
};

export default OperationsBalanceContainer;
