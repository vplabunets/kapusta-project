import React from 'react';
import OperationsTableLines from './OperationsTableLines';
import EmptyLines from './EmptyLines';
import {
  Table,
  TableHead,
  TableHeadTitle,
  TableBody,
} from './OperationsTable.styled';

const OperationsTable = () => {
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
        <OperationsTableLines />
        <EmptyLines />
      </TableBody>
    </Table>
  );
};

export default OperationsTable;
