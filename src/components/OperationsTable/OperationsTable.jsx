import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSelectTransactions } from 'redux/transaction/selectors';
import TransactionsTableLines from './TransactionsTableLines';
import EmptyLines from './EmptyLines'
import { Table, TableHead, TableHeadTitle, TableBody } from './OperationsTable.styled';

const TransactionsTable = () => {
  
  const [transactions, setTransactions] = useState();
  const sortedTransactions = useSelector(getSelectTransactions);

  useEffect(() => {
    setTransactions(sortedTransactions);
  }, [sortedTransactions]);

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
           {transactions && 
          transactions.map(transaction => (
            <TransactionsTableLines 
            key={transaction._id}
            id={transaction._id}
            operation={transaction.operation}
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            sum={transaction.sum}
            />
          ))} 
          <EmptyLines />
        </TableBody>
      </Table>
  );
};

export default TransactionsTable;
