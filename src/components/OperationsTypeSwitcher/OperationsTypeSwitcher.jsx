import React from 'react';
import operationTypes from 'constants/operationTypes';

import { TypeButton, Wrapper } from './OperationsTypeSwitcher.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setOperationType } from 'redux/transaction/slice';
import { selectOperationType } from 'redux/transaction/selectors';

const OperationsTypeSwitcher = () => {
  const dispatch = useDispatch();
  const switchOperationType = type => {
    dispatch(setOperationType(type));
  };
  const OperationType = useSelector(selectOperationType);

  return (
    <Wrapper>
      <TypeButton
        type="button"
        active={OperationType === operationTypes.expenses ? true : false}
        onClick={() => switchOperationType(operationTypes.expenses)}
      >
        Expenses
      </TypeButton>

      <TypeButton
        onClick={() => switchOperationType(operationTypes.incomes)}
        type="button"
        active={OperationType === operationTypes.incomes ? true : false}
      >
        Income
      </TypeButton>
    </Wrapper>
  );
};

export default OperationsTypeSwitcher;
