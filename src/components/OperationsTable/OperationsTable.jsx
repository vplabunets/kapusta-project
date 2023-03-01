import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import moment from 'moment';
import { useTranslation } from 'react-i18next';

import {
  getSelectTransactions,
  selectIsLoading,
  selectTransactionsByRecentDate,
  selectTransactionsByOlderDate,
  selectTransactionsByLargerSum,
  selectTransactionsBySmallerSum,
} from 'redux/transaction/selectors';

import TransactionsTableLines from './TransactionsTableLines';
import EmptyLines from './EmptyLines';
import LoaderCabbage from '../LoaderCabbage/LoaderCabbage';

import icons from 'images/icons-sprite.svg';

import {
  Table,
  TableHead,
  TableHeadTitle,
  TableHeadTitleBtn,
  TableHeadTitleSvg,
  TableBody,
} from './OperationsTable.styled';

const TransactionsTable = () => {
  const IsLoading = useSelector(selectIsLoading);
  const { t } = useTranslation();
  const [isActiveDate, setIsActiveDate] = useState(false);
  const [isActiveSum, setIsActiveSum] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [buttonClickDate, setButtonClickDate] = useState(false);
  const [buttonClickSum, setButtonClickSum] = useState(false);
  const sortedTransactions = useSelector(getSelectTransactions);
  const sortedTransactionsByRecentDate = useSelector(
    selectTransactionsByRecentDate
  );
  const sortedTransactionsByOlderDate = useSelector(
    selectTransactionsByOlderDate
  );
  const sortedTransactionsByLargerSum = useSelector(
    selectTransactionsByLargerSum
  );
  const sortedTransactionsBySmallerSum = useSelector(
    selectTransactionsBySmallerSum
  );

  const handleClickDate = () => {
    setButtonClickDate(!buttonClickDate);
    setIsActiveDate(!isActiveDate);
    buttonClickDate
      ? setTransactions(sortedTransactionsByOlderDate)
      : setTransactions(sortedTransactionsByRecentDate);
  };

  const handleClickSum = () => {
    setButtonClickSum(!buttonClickSum);
    setIsActiveSum(!isActiveSum);
    buttonClickSum
      ? setTransactions(sortedTransactionsByLargerSum)
      : setTransactions(sortedTransactionsBySmallerSum);
  };

  useEffect(() => {
    setTransactions(sortedTransactions);
  }, [sortedTransactions]);

  return (
    <>
      {IsLoading && <LoaderCabbage />}
      <Table>
        <TableHead>
          <tr>
            <TableHeadTitle>
              {t('Date')}
              <TableHeadTitleBtn onClick={handleClickDate}>
                <TableHeadTitleSvg
                  alt="exit"
                  width={10}
                  height={10}
                  isActive={isActiveDate}
                >
                  <use href={`${icons}#icon-arrow-left`}></use>
                </TableHeadTitleSvg>
              </TableHeadTitleBtn>
            </TableHeadTitle>
            <TableHeadTitle>{t('Description')}</TableHeadTitle>
            <TableHeadTitle>{t('Category')}</TableHeadTitle>
            <TableHeadTitle>
              {t('Sum')}
              <TableHeadTitleBtn onClick={handleClickSum}>
                <TableHeadTitleSvg
                  alt="exit"
                  width={10}
                  height={10}
                  isActive={isActiveSum}
                >
                  <use href={`${icons}#icon-arrow-left`}></use>
                </TableHeadTitleSvg>
              </TableHeadTitleBtn>
            </TableHeadTitle>
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
                date={moment(transaction.date).format('DD.MM.YYYY')}
                description={transaction.description}
                category={transaction.category}
                sum={transaction.sum}
              />
            ))}
          {transactions.length < 5 && <EmptyLines />}
          {transactions.length < 9 && <EmptyLines />}
        </TableBody>
      </Table>
    </>
  );
};

export default TransactionsTable;
