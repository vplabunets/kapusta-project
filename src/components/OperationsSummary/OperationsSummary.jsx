import React from 'react';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { selectSummary } from 'redux/transaction/selectors';
import OperationsSummaryLines from './OperationsSummaryLines';

import { Wrapper, Table, Title, Body } from './OperationsSummary.styled';

const OperationsSummary = () => {
  const getSummary = useSelector(selectSummary);
  const { t } = useTranslation();
  const summary = [...getSummary];
  summary.sort((a, b) => b.monthNumber - a.monthNumber);

  return (
    <Wrapper>
      <Table>
        <Title> {t('Summary')} </Title>
        <Body>
          {summary.map(item => {
            return (
              <OperationsSummaryLines
                key={item.sum}
                month={item.month}
                sum={item.sum}
              />
            );
          })}
        </Body>
      </Table>
    </Wrapper>
  );
};

export default OperationsSummary;
