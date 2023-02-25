import ReportsPageWrapper from './ReportsPage.styled';
import ReportsNav from 'components/ReportsNav/ReportsNav';
import { Background } from 'components/UI/Background/Background';
import ReportsMonthBalance from 'components/ReportsMonthBalance/ReportsMonthBalance';
import ReportsMonthSummary from 'components/ReportsMonthSummary/ReportsMonthSummary';
import ReportsChart from 'components/ReportsChart/ReportsChart';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPeriod } from 'redux/reports/selectors';
import { useEffect } from 'react';
import {
  getAllSummaryReports,
  getCategoryReports,
} from 'redux/reports/operations';
import { selectOperationType } from 'redux/transaction/selectors';

const ReportsPage = () => {
  const currentPeriod = useSelector(selectCurrentPeriod);
  const operation = useSelector(selectOperationType);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSummaryReports(currentPeriod));
    dispatch(getCategoryReports({ ...currentPeriod, operation }));
  }, [dispatch, currentPeriod, operation]);
  return (
    <>
      <Background />
      <ReportsPageWrapper>
        <ReportsNav />
        <ReportsMonthBalance />
        <ReportsMonthSummary />
        <ReportsChart />
      </ReportsPageWrapper>
    </>
  );
};

export default ReportsPage;
