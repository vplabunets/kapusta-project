import styled from 'styled-components';
import DEVICE from 'constants/deviceSize';
import { TRANSITION } from 'constants/constants';
const { duration, timing, delay } = TRANSITION;

export const Wrapper = styled.div`
  display: flex;
  padding-bottom: 79px;
  flex-direction: column;
  width: 240px;
  @media ${DEVICE.tablet} {
    width: 252px;
  }
`;

export const ButtonBack = styled.button`
  position: relative;
  top: 5px;
  left: 0;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  justify-content: center;
  outline: none;
  border: none;
  width: 24px;
  height: 24px;
  margin-bottom: 79px;
  transition: transform ${duration} ${timing} ${delay};

  & svg {
    width: 24px;
    height: 24px;
  }

  &:hover,
  &:focus {
    transform: scale(0.9);
  }
`;

export const Text = styled.h2`
  width: 100%;
  display: block;

  margin: 0 auto 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${p => p.theme.lightTheme.mainTextColor};
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
