import React from 'react';
import Chart from 'images/icons-sprite.svg';
import { NavLink } from 'react-router-dom';

import { Title, Wrap } from './OperationsForwardToReports.styled';

export default function OperationsForwardToReports() {
  return (
    <Wrap>
      <NavLink
        to="/reports"
        style={isActive => ({
          color: 'rgba(82, 85, 95, 0.7)',
          display: 'flex',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '12px',
          lineHeight: '14px',
          letterSpacing: '0.04em',
          alignItems: 'center',
          textAlign: 'center',
          textDecoration: 'none',
        })}
      >
        <Title>Reports</Title>
        <svg alt="logo" width={24} height={24}>
          <use href={`${Chart}#icon-chart`}></use>
        </svg>
      </NavLink>
    </Wrap>
  );
}
