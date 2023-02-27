import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { setOperationType } from 'redux/transaction/slice';
import { selectOperationType } from 'redux/transaction/selectors';

import OPERATION_TYPES from 'constants/constants';

import { TypeButton, Wrapper } from './OperationsTypeSwitcher.styled';

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
        {t('button.Expenses')}
      </TypeButton>

      <TypeButton
        onClick={() => switchOperationType(OPERATION_TYPES.incomes)}
        type="button"
        active={OperationType === OPERATION_TYPES.incomes ? true : false}
      >
        {t('button.Income')}
      </TypeButton>
    </Wrapper>
  );
};

OperationsTypeSwitcher.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default OperationsTypeSwitcher;
