import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { useMediaQuery } from '@mui/material';

import IconPlus from 'images/icons-sprite.svg';
import { useTranslation } from 'react-i18next';
import Balance from 'components/Balance/Balance';

import OperationsForwardToReports from 'components/OperationsForwardToReports/OperationsForwardToReports';
import OperationsAddModal from 'components/OperationsAddModal/OperationsAddModal';
import ConfirmModal from 'components/ConfirmModal/ConfirmModal';

import { selectFirstBalance } from 'redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllByOperation } from 'redux/transaction/operations';
import {
  selectOperationType,
  selectTransactions,
} from 'redux/transaction/selectors';

import {
  OperationsModalOpenButton,
  Wrapper,
  ButtonContainer,
} from 'components/OperationsBalanceContainer/OperationsBalanceContainer.styled';
import { BtnWrap } from 'components/OperationsContainer/OperationsContainer.styled';

const OperationsBalanceContainer = ({ addBalance }) => {
  const [isOpenOperationsAddModal, setIsOperationsAddModal] = useState(false);
  const [isOpenModalConfirm, setIsOpenModalConfirm] = useState(false);
  const openModal = () => setIsOperationsAddModal(true);
  let firstBalance = useSelector(selectFirstBalance);
  const isScreenMorePhone = useMediaQuery('(max-width: 767px)');
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const operationType = useSelector(selectOperationType);
  const operation = useSelector(selectTransactions);

  useEffect(() => {
    if (!isScreenMorePhone) return setIsOperationsAddModal(false);
  }, [isScreenMorePhone]);

  return (
    <Wrapper direct={firstBalance ? true : false}>
      {firstBalance && <OperationsForwardToReports />}
      <Balance addBalance={addBalance} />
      {firstBalance && (
        <ButtonContainer>
          <OperationsModalOpenButton onClick={openModal}>
            {t('Add new operation')}
            <svg alt="plus" width={25} height={25}>
              <use href={`${IconPlus}#icon-plus`}></use>
            </svg>
          </OperationsModalOpenButton>
          {isScreenMorePhone && (
            <>
              {operation.length > 0 && (
                <BtnWrap>
                  <OperationsModalOpenButton
                    onClick={() => setIsOpenModalConfirm(true)}
                  >
                    {t(
                      operationType === 'expenses'
                        ? 'Delete All Expenses'
                        : 'Delete All Income'
                    )}
                  </OperationsModalOpenButton>
                </BtnWrap>
              )}
            </>
          )}
        </ButtonContainer>
      )}
      {isScreenMorePhone && isOpenOperationsAddModal && (
        <OperationsAddModal setIsOpen={setIsOperationsAddModal} />
      )}
      {isOpenModalConfirm && (
        <ConfirmModal
          text={t(
            operationType === 'expenses'
              ? 'Are you sure delete expenses'
              : 'Are you sure delete income'
          )}
          onClick={() => {
            dispatch(deleteAllByOperation({ operation: operationType }));
            setIsOpenModalConfirm(false);
          }}
          setModalOpen={setIsOpenModalConfirm}
        />
      )}
    </Wrapper>
  );
};

OperationsBalanceContainer.propTypes = {
  addBalance: PropTypes.number.isRequired,
};

export default OperationsBalanceContainer;
