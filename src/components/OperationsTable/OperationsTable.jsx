import React from 'react';
import TransactionsTableLines from './TransactionsTableLines';
import EmptyLines from './EmptyLines'
import { Table, TableHead, TableHeadTitle, TableBody } from './OperationsTable.styled';

const TransactionsTable = () => {
  return (
      <Table>
        <TableHead>
          <tr>
            <TableHeadTitle>Date</TableHeadTitle>
            <TableHeadTitle>Description</TableHeadTitle>
            <TableHeadTitle>Category</TableHeadTitle>
            <TableHeadTitle>Sum</TableHeadTitle>
            <TableHeadTitle></TableHeadTitle>
          </tr>
        </TableHead>
        <TableBody>
          <TransactionsTableLines />
          <EmptyLines />
        </TableBody>
      </Table>
  );
};

export default TransactionsTable;
