import useMediaQuery from '@mui/material/useMediaQuery';

import ReportsReturnBack from 'components/ReportsReturnBack/ReportsReturnBack';
import ReportsBalanceContainer from 'components/ReportsBalanceContainer/ReportsBalanceContainer';
import ReportsCurrentPeriod from 'components/ReportsCurrentPeriod/ReportsCurrentPeriod';

import { Wrapper, Container } from './ReportsNav.styled';

const ReportsNav = () => {
  const isScreenMorePhone = useMediaQuery('(min-width: 768px)');

  return isScreenMorePhone ? (
    <Wrapper>
      <ReportsReturnBack />
      <ReportsBalanceContainer />
      <ReportsCurrentPeriod />
    </Wrapper>
  ) : (
    <Wrapper>
      <ReportsReturnBack />
      <Container>
        <ReportsBalanceContainer />
        <ReportsCurrentPeriod />
      </Container>
    </Wrapper>
  );
};

export default ReportsNav;
