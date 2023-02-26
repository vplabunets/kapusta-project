import React from 'react';
import { useTranslation } from 'react-i18next';
import Chart from 'images/icons-sprite.svg';

import { Title, Wrap, ReportLink } from './OperationsForwardToReports.styled';

export default function OperationsForwardToReports() {
  const { t } = useTranslation();
  return (
    <Wrap>
      <ReportLink to="/reports">
        <Title>{t('Reports')}</Title>
        <svg alt="logo" width={24} height={24}>
          <use href={`${Chart}#icon-chart`}></use>
        </svg>
      </ReportLink>
    </Wrap>
  );
}
