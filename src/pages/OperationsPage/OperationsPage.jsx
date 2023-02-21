import operationTypes from 'constants/operationTypes';

import OperationsBalanceContainer from 'components/OperationsBalanceContainer/OperationsBalanceContainer';
import OperationsBalanceModal from 'components/OperationsBalanceModal/OperationsBalanceModal';
import OperationsContainer from 'components/OperationsContainer/OperationsContainer';
import OperationsTypeSwitcher from 'components/OperationsTypeSwitcher/OperationsTypeSwitcher';

import { Background } from 'components/UI/Background/Background';
import OperationsPageWrapper from './OperationsPages.styled';
import { useState } from 'react';

const OperationsPage = () => {
  const [type, setType] = useState(operationTypes.expenses);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Background />

      <OperationsPageWrapper>
        <OperationsBalanceContainer />
        {false && <OperationsBalanceModal />}
        <OperationsTypeSwitcher type={type} setType={setType} />
        <OperationsContainer />
      </OperationsPageWrapper>
    </div>
  );
};

export default OperationsPage;
