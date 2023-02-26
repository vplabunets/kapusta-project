import styled from 'styled-components';

import DEVICE from 'constants/deviceSize';
import { TRANSITION } from 'constants/constants';
const { duration, timing, delay } = TRANSITION;

export const Btn = styled.button`
  cursor: pointer;
  font-size: 12px;
  font-weight: inherit;
  line-height: 1.17;
  border-radius: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-weight: 700;
  height: 44px;
  border: none;
  transition: transform ${duration} ${timing} ${delay};

  &:hover,
  &:focus {
    transform: scale(0.9);
  }

  width: ${p => {
    if (p.design === 'home') return '116px';
    if (p.design === 'operation') return '130px';
    if (p.design === 'modal') return '110px';
  }};

  @media ${DEVICE.tablet} {
    width: ${p => {
      if (p.design === 'home') return '122.17px';
      if (p.design === 'operation') return '125px';
      if (p.design === 'modal') return '120px';
    }};
  }
  @media ${DEVICE.laptop} {
    width: ${p => {
      if (p.design === 'home') return '122.17px';
      if (p.design === 'operation') return '136px';
      if (p.design === 'modal') return '125px';
    }};
  }

  @media ${'screen and (max-width: 767px)'} {
    filter: ${p => {
      if (p.design === 'operation' && p.color === 'accent') {
        return 'drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35))';
      }
      if (p.design === 'operation' && p.color === 'white') {
        return `drop-shadow(1px 3px 5px ${p.theme.buttonShadow})`;
      }
    }};
  }

  filter: ${p => {
    if (p.design === 'home' && p.color === 'accent')
      return 'drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35))';
    if (p.design === 'home' && p.color === 'grey')
      return `drop-shadow(1px 3px 5px ${p.theme.buttonShadow})`;
    return;
  }};

  background-color: ${p => {
    if (p.color === 'accent') return `${p.theme.accentColor}`;
    if (p.color === 'grey') return `${p.theme.tableHeadBackgroundColor}`;
    return `${p.theme.whiteTextColor}`;
  }};

  color: ${p => {
    if (p.color === 'accent') return `${p.theme.headerColor}`;
    if (p.color === 'grey') return `${p.theme.btnGreyColor}`;
    return `${p.theme.btnWhiteText}`;
  }};

  border: ${p => {
    if (p.color === 'accent') return;
    return `2px solid ${p.theme.borderColor}`;
  }};
`;
