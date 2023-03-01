import styled from 'styled-components';
import DEVICE from 'constants/deviceSize';

import { TRANSITION } from 'constants/constants';
const { duration, timing, delay } = TRANSITION;

export const Wrapper = styled.div`
  position: fixed;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin-top: 45px;

  @media ${DEVICE.tablet} {
    /* z-index: 0; */
    position: static;
    margin-top: 0px;
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-self: space-between;
  }
  @media ${DEVICE.laptop} {
    margin-top: 0px;
    width: 100%;
    flex-direction: row-reverse;
    justify-content: right;
    align-self: space-between;
  }
`;

export const OperationsModalOpenButton = styled.button`
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 6px;
  width: 150px;
  margin-top: 32px;
  margin-bottom: 32px;
  background-color: ${p => p.theme.accentColor};
  color: ${p => p.theme.whiteTextColor};
  text-transform: uppercase;
  border: none;
  font-family: inherit;
  font-weight: 700;
  filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));

  transition: transform ${duration} ${timing} ${delay};

  svg {
    fill: ${p => p.theme.whiteTextColor};
  }

  &:focus {
    transform: scale(0.9);
  }

  @media ${DEVICE.tablet} {
    display: none;
  }
`;
