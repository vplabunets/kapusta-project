import styled from 'styled-components';
import { TRANSITION } from 'constants/constants';
const { duration, timing, delay } = TRANSITION;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.143;
  color: ${p => p.theme.lightTheme.lightGreyColor};
  text-align: center;
`;
export const ContainerPeriod = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7px;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.143;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  width: 134px;
  text-align: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: white;
  cursor: pointer;
  background-color: transparent;
  transition: transform ${duration} ${timing} ${delay};

  &:hover,
  &:focus {
    transform: scale(0.9);
  }
`;
