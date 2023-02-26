import styled from 'styled-components';
import DEVICE from 'constants/deviceSize';

import { TRANSITION } from 'constants/constants';
const { duration, timing, delay } = TRANSITION;

export const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  display: flex;
  align-self: flex-end;
  justify-content: center;
  width: 100%;

  @media ${DEVICE.tablet} {
    z-index: 0;
    position: static;
    display: flex;
    margin-top: 60px;
    align-self: flex-start;
    width: 276px;
  }
`;
export const TypeButton = styled.button`
  display: flex;
  font-weight: 700;
  height: 53px;
  width: 100%;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: color ${duration} ${timing} ${delay};

  &:hover,
  &:focus {
    color: ${p => p.theme.accentColor};
  }

  background-color: ${p =>
    p.active
      ? `${p.theme.accentColor}`
      : `${p.theme.tableHeadBackgroundColor}`};
  color: ${p =>
    p.active ? `${p.theme.whiteTextColor}` : `${p.theme.tableHeadTextColor}`};

  &:first-child {
    margin-right: 4px;
  }

  @media ${DEVICE.tablet} {
    background-color: ${p =>
      p.active
        ? p.theme.operationTypeSwitchBg
        : p.theme.operationTypeSwitchBg2};
    color: ${p =>
      p.active ? `${p.theme.accentColor}` : `${p.theme.tableHeadTextColor}`};
    width: 138px;
    height: 40px;
    border: none;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    &:first-child {
      margin-right: 0px;
    }
  }

  @media ${DEVICE.laptop} {
    position: static;
  }
`;
