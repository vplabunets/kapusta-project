import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { motion } from 'framer-motion';

import {
  getSummary,
  getTransactionsByOperation,
} from 'redux/transaction/operations';

import { selectFirstVisit, selectFirstBalance } from 'redux/auth/selectors';
import { selectOperationType } from 'redux/transaction/selectors';

import OperationsBalanceContainer from 'components/OperationsBalanceContainer/OperationsBalanceContainer';
import OperationsBalanceModal from 'components/OperationsBalanceModal/OperationsBalanceModal';
import OperationsContainer from 'components/OperationsContainer/OperationsContainer';
import OperationsTypeSwitcher from 'components/OperationsTypeSwitcher/OperationsTypeSwitcher';
import LoaderOperationPage from 'components/LoaderOperationPageSkeleton/LoaderOperationPage';
import { Background } from 'components/UI/Background/Background';
import { CongratulationsModal } from 'components/CongratulationsModal/CongratulationsModal';

import OperationsPageWrapper from './OperationsPages.styled';

const OperationsPage = () => {
  let firstVisit = useSelector(selectFirstVisit);
  let firstBalance = useSelector(selectFirstBalance);
  const [constants, setConstants] = useState(0);
  const skelet = useSelector(state => state.transactions.skelet);

  const handleChange = value => {
    setConstants(prevState => (prevState += 1));
  };

  const operationType = useSelector(selectOperationType);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSummary({ operation: operationType }));
    dispatch(getTransactionsByOperation({ operation: operationType }));
  }, [dispatch, operationType]);

  return (
    <>
      {!firstVisit && <CongratulationsModal />}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Background />
        {skelet ? (
          <LoaderOperationPage />
        ) : (
          <OperationsPageWrapper>
            <OperationsBalanceContainer addBalance={0} />
            {!firstBalance && <OperationsBalanceModal />}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <OperationsTypeSwitcher onChange={handleChange} />
              <OperationsContainer value={constants} />
            </motion.div>
          </OperationsPageWrapper>
        )}
      </div>
    </>
  );
};

export default OperationsPage;
