import React from 'react';
import operationTypes from 'constants/operationTypes';

import { TypeButton, Wrapper } from './OperationsTypeSwitcher.styled';

const OperationsTypeSwitcher = ({
  type = operationTypes.expenses,
  setType,
}) => {
  return (
    <Wrapper>
      <TypeButton
        type="button"
        active={type === operationTypes.expenses ? true : false}
        onClick={() => setType(operationTypes.expenses)}
      >
        Expenses
      </TypeButton>

      <TypeButton
        onClick={() => setType(operationTypes.incomes)}
        type="button"
        active={type === operationTypes.incomes ? true : false}
      >
        Incomes
      </TypeButton>
    </Wrapper>
  );
};

export default OperationsTypeSwitcher;
