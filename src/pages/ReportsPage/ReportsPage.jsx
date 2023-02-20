import ReportsPageWrapper from './ReportsPage.styled';
import ReportsNav from 'components/ReportsNav/ReportsNav';
import { Background } from 'components/UI/Background/Background';
import ReportsMonthBalance from 'components/ReportsMonthBalance/ReportsMonthBalance';
import ReportsMonthSummary from 'components/ReportsMonthSummary/ReportsMonthSummary';
import ReportsChart from 'components/ReportsChart/ReportsChart';

const ReportsPage = () => {
  return (
    <>
      <Background />
      <ReportsPageWrapper>
        <ReportsNav />
        <ReportsMonthBalance />
        <ReportsMonthSummary />
        <ReportsBalanceContainer />
        <ReportsChart />
      </ReportsPageWrapper>
    </>
  );
};

export default ReportsPage;
