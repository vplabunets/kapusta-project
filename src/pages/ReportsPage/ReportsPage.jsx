import ReportsBalanceContainer from 'components/ReportsBalanceContainer/ReportsBalanceContainer';
import React from 'react';
import ReportsPageWrapper from './ReportsPage.styled';
import ReportsMonthBalance from 'components/ReportsMonthBalance/ReportsMonthBalance';

import { ReportsReturnBack } from 'components/ReportsReturnBack/ReportsReturnBack';
import { Background } from 'components/UI/Background/Background';
import ReportsChart from 'components/ReportsChart/ReportsChart';

const ReportsPage = () => {
  return (
    <>
      <Background />
      <ReportsPageWrapper>
        <ReportsReturnBack />
        <ReportsMonthBalance />
        <ReportsBalanceContainer />
        <ReportsChart />
      </ReportsPageWrapper>
    </>
  );
};

export default ReportsPage;
