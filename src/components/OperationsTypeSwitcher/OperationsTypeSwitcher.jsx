import React, { useState } from 'react';
import { TypeButton, Wrapper } from './OperationsTypeSwitcher.styled';

const OperationsTypeSwitcher = () => {
  const [type, setType] = useState('expenses');

  let xxx = '';
  let yyy = '';

  const colorEx = () => {
    xxx = `${p => p.theme.lightTheme.accentColor}`;
    yyy = `${p => p.theme.lightTheme.tableHeadBackgroundColor}`;
    // xxx = 'red';
    // yyy = 'green';
    // setType('expenses');
  };
  const colorIn = () => {
    yyy = `${p => p.theme.lightTheme.accentColor}`;
    xxx = `${p => p.theme.lightTheme.tableHeadBackgroundColor}`;
    // xxx = 'green';
    // yyy = 'red';
    // setType('income');
  };

  return (
    <Wrapper>
      <TypeButton
        onClick={colorEx()}
        style={{ backgroundColor: `${xxx}` }}
        type="button"
      >
        {type}
      </TypeButton>
      <TypeButton
        onClick={colorIn()}
        style={{ backgroundColor: `${yyy}` }}
        type="button"
      >
        Incomes
      </TypeButton>
    </Wrapper>
  );
};

export default OperationsTypeSwitcher;
