import React from 'react';
import OPERATION_TYPES from 'constants/constants';
import { useTranslation } from 'react-i18next';
import { TypeButton, Wrapper } from './OperationsTypeSwitcher.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setOperationType } from 'redux/transaction/slice';
import { selectOperationType } from 'redux/transaction/selectors';

const OperationsTypeSwitcher = ({ onChange }) => {
  const dispatch = useDispatch();
  const switchOperationType = type => {
    onChange(true);
    dispatch(setOperationType(type));
  };
const { t } = useTranslation();
  const OperationType = useSelector(selectOperationType);

  return (
    <Wrapper>
      <TypeButton
        type="button"
        active={OperationType === OPERATION_TYPES.expenses ? true : false}
        onClick={() => switchOperationType(OPERATION_TYPES.expenses)}
      >
       { t('button.Expenses') }
      </TypeButton>

      <TypeButton
        onClick={() => switchOperationType(OPERATION_TYPES.incomes)}
        type="button"
        active={OperationType === OPERATION_TYPES.incomes ? true : false}
      >
        { t('button.Income') }
      </TypeButton>
    </Wrapper>
  );
};

export default OperationsTypeSwitcher;
