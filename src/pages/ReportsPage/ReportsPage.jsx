import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { motion } from 'framer-motion';

import { getReports } from 'redux/reports/operations';
import { selectOperationType } from 'redux/transaction/selectors';
import { setOperationType } from 'redux/transaction/slice';
import { selectCurrentPeriod } from 'redux/reports/selectors';

import OPERATION_TYPES from 'constants/constants';

import ReportsNav from 'components/ReportsNav/ReportsNav';
import { Background } from 'components/UI/Background/Background';
import ReportsMonthBalance from 'components/ReportsMonthBalance/ReportsMonthBalance';
import ReportsMonthSummary from 'components/ReportsMonthSummary/ReportsMonthSummary';
import ReportsChart from 'components/ReportsChart/ReportsChart';

import ReportsPageWrapper from './ReportsPage.styled';

const ReportsPage = () => {
  const currentPeriod = useSelector(selectCurrentPeriod);
  const operation = useSelector(selectOperationType);

  const dispatch = useDispatch();

  const toggleType = () => {
    if (operation === OPERATION_TYPES.expenses) {
      return dispatch(setOperationType(OPERATION_TYPES.incomes));
    }
    return dispatch(setOperationType(OPERATION_TYPES.expenses));
  };

  useEffect(() => {
    dispatch(getReports({ ...currentPeriod }));
  }, [dispatch, currentPeriod]);

  return (
    <>
      <ReportsPageWrapper>
        <ReportsNav />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <ReportsMonthBalance />
          <ReportsMonthSummary reportType={operation} toggleType={toggleType} />
          <ReportsChart />
        </motion.div>
      </ReportsPageWrapper>
      <Background />
    </>
  );
};

export default ReportsPage;
