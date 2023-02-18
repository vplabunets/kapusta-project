import ReportsBalanceContainer from 'components/ReportsBalanceContainer/ReportsBalanceContainer';
import React from 'react';
import ReportsPageWrapper from './ReportsPage.styled';
import ReportsMonthBalance from 'components/ReportsMonthBalance/ReportsMonthBalance';
import { Background } from 'components/UI/Background/Background';

const ReportsPage = () => {
  return (
    <>
      <Background />
      <ReportsPageWrapper>
        <ReportsMonthBalance />
        <ReportsBalanceContainer />
      </ReportsPageWrapper>
    </>
  );
};

export default ReportsPage;
