import React from 'react';
import {
  Tabletr,
  Data,
  Description,
  Category,
  Sum,
} from './OperationsTableLines.styled';

const OperationsTableLines = () => {
  return (
    <>
      <Tabletr>
        <Data>18.02.2023</Data>
        <Description>Description</Description>
        <Category>Category</Category>
        <Sum>456</Sum>
        <td></td>
      </Tabletr>
      <Tabletr>
        <Data>18.02.2023</Data>
        <Description>Description</Description>
        <Category>Category</Category>
        <Sum>456</Sum>
        <td></td>
      </Tabletr>
    </>
  );
};

export default OperationsTableLines;
