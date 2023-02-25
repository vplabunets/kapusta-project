import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NumericFormat } from 'react-number-format';
import icon from 'images/icons-sprite.svg';
import { deleteTransaction } from 'redux/transaction/operations';
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

  const sumStyle = getSumStyle(operation);

  return (
    <>
      <Tabletr>
        {modalOpen && (
          <ConfirmModal
            setModalOpen={setModalOpen}
            text={'Are you sure?'}
            onClick={() => onDelete(id)}
          />
        )}

        <Data>{date}</Data>
        <Description>{description}</Description>
        <Category>{category}</Category>
        <Sum style={sumStyle}>
          <NumericFormat
            value={sum}
            placeholder={'00.00 UAH'}
            prefix={operation === 'expenses' ? '- ' : ''}
            suffix={' UAH'}
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

export default TransactionsTableLines;
