import styled from 'styled-components';

import device from 'constants/deviceSize';

export const Btn = styled.button`
  cursor: pointer;
  font-size: 12px;
  font-weight: inherit;
  line-height: 1.17;
  border-radius: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-weight: 700;
  height: 44px;
  border: none;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover,
  &:focus {
    transform: scale(0.9);
  }

  width: ${p => {
    if (p.design === 'home') return '116px';
    if (p.design === 'operation') return '130px';
    if (p.design === 'modal') return '110px';
  }};

  @media ${device.tablet} {
    width: ${p => {
      if (p.design === 'home') return '122.17px';
      if (p.design === 'operation') return '125px';
      if (p.design === 'modal') return '120px';
    }};
  }
  @media ${device.laptop} {
    width: ${p => {
      if (p.design === 'home') return '122.17px';
      if (p.design === 'operation') return '136px';
      if (p.design === 'modal') return '125px';
    }};
  }

  filter: ${p => {
    if (p.design === 'home' && p.color === 'accent')
      return 'drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35))';
    if (p.design === 'home' && p.color === 'grey')
      return 'drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15))';
    return;
  }};

  background-color: ${p => {
    if (p.color === 'accent') return '#FF751D';
    if (p.color === 'grey') return '#F5F6FB';
    return '#FFFFFF';
  }};

  color: ${p => {
    if (p.color === 'accent') return '#FFFFFF';
    return '#52555F';
  }};

  border: ${p => {
    if (p.color === 'accent') return;
    return '2px solid #f6f7fc;';
  }};
`;
