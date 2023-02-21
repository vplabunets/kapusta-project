import Balance from 'components/Balance/Balance';
import {
  OperationsModalOpenButton,
  Wrapper,
} from 'components/OperationsBalanceContainer/OperationsBalanceContainer.styled';
import OperationsForwardToReports from 'components/OperationsForwardToReports/OperationsForwardToReports';
import React, { useState } from 'react';
import IconPlus from 'images/icons-sprite.svg';
import OperationsAddModal from 'components/OperationsAddModal/OperationsAddModal';

const OperationsBalanceContainer = () => {
  const [isOpenOperationsAddModal, setIsOperationsAddModal] = useState(false);

  const openModal = () => setIsOperationsAddModal(true);
  return (
    <Wrapper>
      <OperationsForwardToReports />
      <Balance />
      <OperationsModalOpenButton onClick={openModal}>
        <svg alt="exit" width={25} height={25}>
          <use href={`${IconPlus}#icon-plus`}></use>
        </svg>
      </OperationsModalOpenButton>
      {isOpenOperationsAddModal && <OperationsAddModal />}
    </Wrapper>
  );
};

export default OperationsBalanceContainer;
