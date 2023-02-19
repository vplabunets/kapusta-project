import OperationsBalanceContainer from 'components/OperationsBalanceContainer/OperationsBalanceContainer';
import OperationsBalanceModal from 'components/OperationsBalanceModal/OperationsBalanceModal';
import OperationsContainer from 'components/OperationsContainer/OperationsContainer';

import { Background } from 'components/UI/Background/Background';
import OperationsPageWrapper from './OperationsPages.styled';

const OperationsPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Background />
      <OperationsPageWrapper>
        <OperationsBalanceContainer />
        {false && <OperationsBalanceModal />}

        <OperationsContainer />
      </OperationsPageWrapper>
    </div>
  );
};

export default OperationsPage;
