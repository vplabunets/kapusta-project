import styled from 'styled-components';

import DEVICE from 'constants/deviceSize';
import { TRANSITION } from 'constants/constants';
const { duration, timing, delay } = TRANSITION;

export const ReportItemButton = styled.li`
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  width: 92px;
  border-bottom: 1px solid #e0e5eb;

  @media ${DEVICE.tablet} {
    border-bottom: none;
    padding-bottom: 0px;
    width: 90px;
  }
`;

export const Sum = styled.p`
  text-align: center;
  font-size: 12px;
  line-height: 1.17;

  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: ${p => p.theme.lightTheme.mainTextColor};
  margin-bottom: 5px;
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export const ButtonReport = styled.button`
  cursor: pointer;
  height: 60px;
  max-width: 60px;

  background-color: transparent;
  border: none;
  margin-bottom: 5px;

  &:hover > div {
    background-color: ${p => p.theme.lightTheme.chartLight};
    transform: scale(1.1);
  }

  &:focus,
  &:hover svg {
    fill: ${p => p.theme.lightTheme.accentColor};
  }

  & > div {
    z-index: -1;
    display: block;
    width: 59px;
    height: 46px;
    transition: background-color ${duration} ${timing} ${delay},
      transform ${duration} ${timing} ${delay};

    background-color: ${p =>
      p.isActive
        ? `${p.theme.lightTheme.chartLight}`
        : `${p.theme.lightTheme.tableHeadBackgroundColor}`};
    border-radius: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  & > svg {
    transition: fill ${duration} ${timing} ${delay};
    z-index: 1;

    fill: ${p =>
      p.isActive
        ? `${p.theme.lightTheme.accentColor}`
        : `${p => p.theme.lightTheme.iconColor}`};
  }
`;

export const Type = styled.p`
  flex-grow: 1;
  text-align: center;
  font-size: 12px;
  line-height: 1.17;

  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: ${p => p.theme.lightTheme.mainTextColor};
`;
