import Balance from 'components/Balance/Balance';
import { Wrapper } from 'components/OperationsBalanceContainer/OperationsBalanceContainer.styled';
import OperationsForwardToReports from 'components/OperationsForwardToReports/OperationsForwardToReports';
import React from 'react';

const OperationsBalanceContainer = () => {
  return (
    <Wrapper>
      <OperationsForwardToReports />
      <Balance />
    </Wrapper>
  );
};

export default OperationsBalanceContainer;
