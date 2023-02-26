import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useMediaQuery } from '@mui/material';

import Balance from 'components/Balance/Balance';

import OperationsForwardToReports from 'components/OperationsForwardToReports/OperationsForwardToReports';
import IconPlus from 'images/icons-sprite.svg';
import OperationsAddModal from 'components/OperationsAddModal/OperationsAddModal';

import {
  OperationsModalOpenButton,
  Wrapper,
} from 'components/OperationsBalanceContainer/OperationsBalanceContainer.styled';

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

OperationsBalanceContainer.propTypes = {
  addBalance: PropTypes.number.isRequired,
};

export default OperationsBalanceContainer;
