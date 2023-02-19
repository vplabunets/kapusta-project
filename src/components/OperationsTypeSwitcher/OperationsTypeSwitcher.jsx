import React from 'react';
import { TypeButton, Wrapper } from './OperationsTypeSwitcher.styled';

const OperationsTypeSwitcher = () => {
  return (
    <Wrapper>
      <TypeButton>Expenses</TypeButton>
      <TypeButton>Incomes</TypeButton>
    </Wrapper>
  );
};

export default OperationsTypeSwitcher;
