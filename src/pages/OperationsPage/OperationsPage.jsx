import OperationsBalanceContainer from 'components/OperationsBalanceContainer/OperationsBalanceContainer';
import OperationsSummary from 'components/OperationsSummary/OperationsSummary';
import React from 'react';
import OperationsPageWrapper from './OperationsPages.styled';

const OperationsPage = () => {
  return (
    <OperationsPageWrapper>
      <OperationsBalanceContainer />
      <OperationsSummary />
    </OperationsPageWrapper>
  );
};

export default OperationsPage;
