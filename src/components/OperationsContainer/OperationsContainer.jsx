import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'react-i18next';

import {
  selectOperationType,
  selectTransactions,
} from 'redux/transaction/selectors';
import { deleteAllByOperation } from 'redux/transaction/operations';

import OperationsForm from 'components/OperationsForm/OperationsForm';
import OperationsSummary from 'components/OperationsSummary/OperationsSummary';
import OperationsTable from 'components/OperationsTable/OperationsTable';

import ConfirmModal from 'components/ConfirmModal/ConfirmModal';

import { Button } from 'components/UI/Button/Button';
import {
  Wrapper,
  WrapperTableSummary,
  BtnWrap,
} from './OperationsContainer.styled';

const OperationsContainer = ({ value }) => {
  const operationType = useSelector(selectOperationType);
  const [isOpenModalConfirm, setIsOpenModalConfirm] = useState(false);
  const dispatch = useDispatch();
  const isScreenMorePhone = useMediaQuery('(min-width: 768px)');
  const middle = useMediaQuery('(max-width: 1279px)');
  const isScreenLaptop = useMediaQuery('(min-width: 1280px)');
  const operation = useSelector(selectTransactions);
  const { t } = useTranslation();

  return (
    <>
      <Wrapper>
        {isScreenMorePhone && <OperationsForm value={value} />}
        <WrapperTableSummary>
          <OperationsTable />
          {isScreenLaptop && <OperationsSummary />}
        </WrapperTableSummary>
        {isScreenMorePhone && operation.length > 0 && (
          <BtnWrap>
            <Button
              type="button"
              design="operation"
              color="accent"
              onClick={() => setIsOpenModalConfirm(true)}
            >
              {t(
                operationType === 'expenses'
                  ? 'Delete All Expenses'
                  : 'Delete All Income'
              )}
            </Button>
          </BtnWrap>
        )}
        {isOpenModalConfirm && (
          <ConfirmModal
            text={t(
              operationType === 'expenses'
                ? 'Are you sure delete expenses'
                : 'Are you sure delete income'
            )}
            onClick={() =>
              dispatch(deleteAllByOperation({ operation: operationType }))
            }
            setModalOpen={setIsOpenModalConfirm}
          />
        )}
      </Wrapper>
      {isScreenMorePhone && middle && <OperationsSummary />}
    </>
  );
};

OperationsContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default OperationsContainer;
