import OperationsBalanceContainer from 'components/OperationsBalanceContainer/OperationsBalanceContainer';
import OperationsSummary from 'components/OperationsSummary/OperationsSummary';

import { Background } from 'components/UI/Background/Background';
import OperationsPageWrapper from './OperationsPages.styled';

const OperationsPage = () => {
  return (
    <>
      <Background />
      <OperationsPageWrapper>
        <OperationsBalanceContainer />
        <OperationsSummary />
      </OperationsPageWrapper>
    </>
  );
};

export default OperationsPage;
