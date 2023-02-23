import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NumericFormat } from 'react-number-format';
import icon from 'images/icons-sprite.svg';
import { addTransaction, deleteTransaction } from 'redux/transaction/operations';
import { selectTransactions } from 'redux/transaction/selectors';
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

const TransactionsTableLines = ({ id, operation, date, description, category, sum }) => {

  const dispatch = useDispatch();
  
  const initialBalance = useSelector(selectTransactions);
  // console.log('initialBalance', initialBalance);
  const addTransactions = data => dispatch(addTransaction(data));

  const getUpdateBallance = (operation , sum) => {
    switch (operation) {
      case 'expenses':
        const expenses = initialBalance + Math.abs(sum);
        addTransactions({ transactions: expenses});
        return;
        case 'income':
          const income = initialBalance + Math.abs(sum);
          addTransactions({ transactions: income});
          return;
        default:
          return initialBalance;
}
};

const onDelete = (id, operation, sum) => {
  getUpdateBallance(operation, sum);
  dispatch(deleteTransaction(id));
}

const sumStyle = getSumStyle(operation);
  // console.log('getSumStyle:', sumStyle);

  return (
    <>
    <Tabletr>
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
          <BtnStyle type="button" onClick={() => {
            onDelete(id, operation, sum)
          }}>
            <Delete alt="delete" width={18} height={18}>
              <use href={`${icon}#icon-basket`}></use>
            </Delete>
          </BtnStyle>
        </Btn>
      </Tabletr>
      {/* <Tabletr>
        <Data>18.02.2023</Data>
        <Description>Description</Description>
        <Category>Category</Category>
        <Sum style={{ color: '#E7192E' }}>
          <NumericFormat
            value={300}
            placeholder={'00.00 UAH'}
            prefix={'- '}
            suffix={' UAH'}
            displayType={'text'}
            disabled={true}
            fixedDecimalScale={'true'}
            decimalScale={'2'}
            thousandSeparator={''}
          />
        </Sum>
        <Btn>
          <BtnStyle type="button">
            <Delete alt="delete" width={18} height={18}>
              <use href={`${icon}#icon-basket`}></use>
            </Delete>
          </BtnStyle>
        </Btn>
      </Tabletr>
      <Tabletr>
        <Data>18.02.2023</Data>
        <Description>Description</Description>
        <Category>Category</Category>
        <Sum style={{ color: '#E7192E' }}>
          <NumericFormat
            value={300}
            placeholder={'00.00 UAH'}
            prefix={'- '}
            suffix={' UAH'}
            displayType={'text'}
            disabled={true}
            fixedDecimalScale={'true'}
            decimalScale={'2'}
            thousandSeparator={''}
          />
        </Sum>
        <Btn
          onClick={() => {
            dispatch(deleteTransaction('63f75a322b6367855cd138aa'));
          }}
        >
          <BtnStyle type="button">
            <Delete alt="delete" width={18} height={18}>
              <use href={`${icon}#icon-basket`}></use>
            </Delete>
          </BtnStyle>
        </Btn>
      </Tabletr> */}
    </>
  );
};

export default TransactionsTableLines;
