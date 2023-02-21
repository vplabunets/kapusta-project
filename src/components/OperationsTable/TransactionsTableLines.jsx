import React from 'react';
import icon from 'images/icons-sprite.svg';
import { Tabletr, Data, Description, Category, Sum, Btn, BtnStyle, Delete } from './TransactionsTableLines.styled';

// const getValueStyle = operation => {
// switch (operation) {
//   case 'expenses':
//     return {
//       color: '#E7192E',
//     };
//     case 'income':
//     return {
//       color: '#407946',
//     };
//     default:
//       return {};
// }
// };


const TransactionsTableLines = () => {

    return (
        <>
        <Tabletr>
            <Data>18.02.2023</Data>
            <Description>Description</Description>
            <Category>Category</Category>
            <Sum>30.00 UAH.</Sum>
            <Btn>
                <BtnStyle type='button'>
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
            <Sum>30.00 UAH.</Sum>
            <Btn>
                <BtnStyle type='button'>
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
  