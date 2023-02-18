import Balance from 'components/Balance/Balance';
import OperationsForwardToReports from 'components/OperationsForwardToReports/OperationsForwardToReports';
import React from 'react';

const OperationsBalanceContainer = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Balance />
      <OperationsForwardToReports />
    </div>
  );
};

export default OperationsBalanceContainer;
