import { useEffect } from 'react';

import Balance from 'components/Balance/Balance';
import {
  OperationsModalOpenButton,
  Wrapper,
} from 'components/OperationsBalanceContainer/OperationsBalanceContainer.styled';
import OperationsForwardToReports from 'components/OperationsForwardToReports/OperationsForwardToReports';
import React, { useState } from 'react';
import IconPlus from 'images/icons-sprite.svg';
import OperationsAddModal from 'components/OperationsAddModal/OperationsAddModal';
import { useMediaQuery } from '@mui/material';

const OperationsBalanceContainer = ({ addBalance }) => {
  const [isOpenOperationsAddModal, setIsOperationsAddModal] = useState(false);
  const openModal = () => setIsOperationsAddModal(true);
  const isScreenMorePhone = useMediaQuery('(max-width: 767px)');

  useEffect(() => {
    if (!isScreenMorePhone) return setIsOperationsAddModal(false);
  }, [isScreenMorePhone]);

  return (
    <Wrapper>
      <OperationsForwardToReports />
      <Balance addBalance={addBalance} />
      <OperationsModalOpenButton onClick={openModal}>
        Add new operation
        <svg alt="plus" width={25} height={25}>
          <use href={`${IconPlus}#icon-plus`}></use>
        </svg>
      </OperationsModalOpenButton>
      {isScreenMorePhone && isOpenOperationsAddModal && (
        <OperationsAddModal setIsOpen={setIsOperationsAddModal} />
      )}
    </Wrapper>
  );
};

export default OperationsBalanceContainer;
