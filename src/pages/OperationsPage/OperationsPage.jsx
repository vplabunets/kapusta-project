// import OPERATION_TYPE from 'constants/constants';

import OperationsBalanceContainer from 'components/OperationsBalanceContainer/OperationsBalanceContainer';
import OperationsBalanceModal from 'components/OperationsBalanceModal/OperationsBalanceModal';
import OperationsContainer from 'components/OperationsContainer/OperationsContainer';
import OperationsTypeSwitcher from 'components/OperationsTypeSwitcher/OperationsTypeSwitcher';

import { Background } from 'components/UI/Background/Background';
import OperationsPageWrapper from './OperationsPages.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSummary,
  getTransactionsByOperation,
} from 'redux/transaction/operations';
// import { setOperationType } from 'redux/transaction/slice';
import { selectOperationType } from 'redux/transaction/selectors';

const OperationsPage = () => {
  // const [type, setType] = useState(operationTypes.expenses);

  // const [balance, setBalance] = useState(null);
  // const addBalance = xxx => setBalance(xxx);

  const [constants, setConstants] = useState(0);
  const handleChange = value => {
    setConstants(prevState => (prevState += 1));
  };

  const operationType = useSelector(selectOperationType);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(setOperationType(type));
    dispatch(getSummary({ operation: operationType }));
    dispatch(getTransactionsByOperation({ operation: operationType }));
  }, [dispatch, operationType]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Background />

      <OperationsPageWrapper>
        <OperationsBalanceContainer addBalance={0} />
        {false && <OperationsBalanceModal />}
        <OperationsTypeSwitcher
          onChange={handleChange}
          // type={type} setType={setType}
        />
        <OperationsContainer value={constants} />
      </OperationsPageWrapper>
    </div>
  );
};

export default OperationsPage;
