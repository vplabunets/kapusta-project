import ReportsBalanceContainer from 'components/ReportsBalanceContainer/ReportsBalanceContainer';
import React from 'react';
import ReportsPageWrapper from './ReportsPage.styled';
import ReportsMonthBalance from 'components/ReportsMonthBalance/ReportsMonthBalance';

import { ReportsReturnBack } from 'components/ReportsReturnBack/ReportsReturnBack';

const ReportsPage = () => {
  return (
    <ReportsPageWrapper>
      <ReportsReturnBack />
      <ReportsMonthBalance />
      <ReportsBalanceContainer />
    </ReportsPageWrapper>

  );
};

export default ReportsPage;
