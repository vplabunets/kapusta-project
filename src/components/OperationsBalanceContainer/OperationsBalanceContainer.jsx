import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { useMediaQuery } from '@mui/material';

import IconPlus from 'images/icons-sprite.svg';
import { useTranslation } from 'react-i18next';
import Balance from 'components/Balance/Balance';
import OperationsForwardToReports from 'components/OperationsForwardToReports/OperationsForwardToReports';

import OperationsAddModal from 'components/OperationsAddModal/OperationsAddModal';

import {
  OperationsModalOpenButton,
  Wrapper,
} from 'components/OperationsBalanceContainer/OperationsBalanceContainer.styled';
import { selectFirstBalance } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

const OperationsBalanceContainer = ({ addBalance }) => {
  const [isOpenOperationsAddModal, setIsOperationsAddModal] = useState(false);
  const openModal = () => setIsOperationsAddModal(true);
  let firstBalance = useSelector(selectFirstBalance);
  const isScreenMorePhone = useMediaQuery('(max-width: 767px)');
  const { t } = useTranslation();
  useEffect(() => {
    if (!isScreenMorePhone) return setIsOperationsAddModal(false);
  }, [isScreenMorePhone]);

  return (
    <Wrapper>
      {!isScreenMorePhone && <OperationsForwardToReports />}
      <Balance addBalance={addBalance} />
      {firstBalance && (
        <OperationsModalOpenButton onClick={openModal}>
          {t('Add new operation')}
          <svg alt="plus" width={25} height={25}>
            <use href={`${IconPlus}#icon-plus`}></use>
          </svg>
        </OperationsModalOpenButton>
      )}
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
