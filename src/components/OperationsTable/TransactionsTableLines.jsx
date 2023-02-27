import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';

import { useTranslation } from 'react-i18next';
import { NumericFormat } from 'react-number-format';

import icon from 'images/icons-sprite.svg';

import { deleteTransaction } from 'redux/transaction/operations';

import categoryName from 'helpers/categoryName';

import ConfirmModal from '../ConfirmModal/ConfirmModal';

import {
  Tabletr,
  Data,
  Description,
  Category,
  Sum,
  Btn,
  BtnStyle,
  Delete,
} from './TransactionsTableLines.styled';

const getSumStyle = operation => {
  switch (operation) {
    case 'expenses':
      return {
        color: '#E7192E',
      };
    case 'income':
      return {
        color: '#407946',
      };
    default:
      return {};
  }
};

const TransactionsTableLines = ({
  id,
  operation,
  date,
  description,
  category,
  sum,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const onDelete = _id => {
    dispatch(deleteTransaction(_id));
    return;
  };
  const { t } = useTranslation();
  const sumStyle = getSumStyle(operation);

  return (
    <>
      <Tabletr>
        {modalOpen && (
          <ConfirmModal
            setModalOpen={setModalOpen}
            text={t('Are you sure')}
            onClick={() => onDelete(id)}
          />
        )}

        <Data>{date}</Data>
        <Description>{description}</Description>
        <Category>{t(categoryName(category))}</Category>
        <Sum style={sumStyle}>
          <NumericFormat
            value={sum}
            placeholder={t('00.00UAH')}
            prefix={operation === 'expenses' ? '- ' : ''}
            suffix={t('UAH')}
            displayType={'text'}
            disabled={true}
            fixedDecimalScale={'true'}
            decimalScale={'2'}
            thousandSeparator={''}
          />
        </Sum>
        <Btn>
          <BtnStyle type="button" onClick={() => setModalOpen(true)}>
            <Delete alt="delete" width={18} height={18}>
              <use href={`${icon}#icon-basket`}></use>
            </Delete>
          </BtnStyle>
        </Btn>
      </Tabletr>
    </>
  );
};

TransactionsTableLines.propTypes = {
  id: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
};

export default TransactionsTableLines;
