import React from 'react';
import Chart from 'images/icons-sprite.svg';

import { Title, Wrap, ReportLink } from './OperationsForwardToReports.styled';

export default function OperationsForwardToReports() {
  return (
    <Wrap>
      <ReportLink to="/reports">
        <Title>Reports</Title>
        <svg alt="logo" width={24} height={24}>
          <use href={`${Chart}#icon-chart`}></use>
        </svg>
      </ReportLink>
    </Wrap>
  );
}
