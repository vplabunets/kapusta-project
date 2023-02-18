import ReportsBalanceContainer from 'components/ReportsBalanceContainer/ReportsBalanceContainer';
import React from 'react';
import ReportsPageWrapper from './ReportsPage.styled';
import MonthBalance from 'components/ReportsMonthBalance/ReportsMonthBalance';

const ReportsPage = () => {
  return (
    <ReportsPageWrapper>
      <MonthBalance />
      <ReportsBalanceContainer />
    </ReportsPageWrapper>
  );
};

export default ReportsPage;
