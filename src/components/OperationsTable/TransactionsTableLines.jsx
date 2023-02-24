import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { NumericFormat } from 'react-number-format';
import icon from 'images/icons-sprite.svg';
import { deleteTransaction } from 'redux/transaction/operations';
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
  
  const onDelete = (_id) => {
  dispatch(deleteTransaction(_id))
  toast.warning(`The transaction "${description}" was successfully deleted`, {
    position: toast.POSITION.TOP_RIGHT,
    theme: 'colored',
    pauseOnHover: true,
  });;
}

const sumStyle = getSumStyle(operation);

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
            onDelete(id)
          }}>
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