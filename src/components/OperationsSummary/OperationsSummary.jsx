import React from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { selectSummary } from 'redux/transaction/selectors';

import {
  Wrapper,
  Table,
  Row,
  Cell,
  Title,
  Body,
} from './OperationsSummary.styled';

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
              <Row key={item.month}>
                <Cell>{item.month}</Cell>
                <Cell>{item.sum}.00</Cell>
              </Row>
            );
          })}
        </Body>
      </Table>
    </Wrapper>
  );
};

export default OperationsSummary;
