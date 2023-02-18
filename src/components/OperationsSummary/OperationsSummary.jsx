import React from 'react';
import {
  Wrapper,
  Table,
  Row,
  Cell,
  Title,
  Body,
} from './OperationsSummary.styled';

const OperationsSummary = () => {
  return (
    <Wrapper>
      <Table>
        <Title> Summary </Title>
        <Body>
          <Row>
            <Cell>November</Cell>
            <Cell>10 000.00</Cell>
          </Row>
          <Row>
            <Cell>October</Cell>
            <Cell>30 000.00</Cell>
          </Row>
          <Row>
            <Cell>September</Cell>
            <Cell>30 000.00</Cell>
          </Row>
          <Row>
            <Cell>August</Cell>
            <Cell>20 000.00</Cell>
          </Row>
          <Row>
            <Cell>July</Cell>
            <Cell>15 000.00</Cell>
          </Row>
          <Row>
            <Cell>June</Cell>
            <Cell>18 000.00</Cell>
          </Row>
        </Body>
      </Table>
    </Wrapper>
  );
};

export default OperationsSummary;
