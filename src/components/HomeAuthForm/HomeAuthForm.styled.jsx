import styled from 'styled-components';
import { Field } from 'formik';

import DEVICE from 'constants/deviceSize';

import { TRANSITION } from 'constants/constants';
const { duration, timing, delay } = TRANSITION;

export const MainWrapper = styled.div`
  margin: 0 auto;
  background-color: ${p => p.theme.lightTheme.headerColor};
  max-width: 426px;

  padding: 40px 20px;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 30px;

  @media ${DEVICE.tablet} {
    max-width: 426px;
    width: 426px;
    padding: 56px 83px;
  }

  @media ${DEVICE.laptop} {
    margin: 117px 0 0;
  }
`;

export const GoogleText = styled.p`
  width: 222px;
  margin: 0 auto 16px;

  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.04em;

  color: ${p => p.theme.lightTheme.mainTextColor};

  @media ${DEVICE.laptop} {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const GoogleButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 122px;
  height: 40px;
  margin: 0 auto 32px;
  background-color: ${p => p.theme.lightTheme.googleBtnColor};
  border: none;
  border-radius: 26px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  text-decoration: none;

  letter-spacing: 0.02em;
  color: ${p => p.theme.lightTheme.tableHeadTextColor};

  transition: transform ${duration} ${timing} ${delay};

  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));

  &:hover,
  &:focus {
    transform: scale(0.9);
  }

  & svg {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
`;

export const LoginText = styled.p`
  text-align: left;
  margin-bottom: 16px;

  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;

  color: ${p => p.theme.lightTheme.mainTextColor};

  @media ${DEVICE.laptop} {
    width: 250px;
    margin-bottom: 20px;
  }
`;

export const AuthFormLabel = styled.label`
  position: relative;
  display: block;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;

  color: ${p => p.theme.lightTheme.tableHeadTextColor};
  :nth-of-type(2) {
    margin-top: 20px;
  }
  @media ${DEVICE.tablet} {
    font-size: 12px;
    line-height: 1.16;
    :nth-of-type(2) {
      margin-top: 32px;
    }
  }
`;

export const Input = styled(Field)`
  outline-color: ${p => p.theme.lightTheme.accentColor};
  font-family: inherit;
  margin-top: 12px;
  width: 100%;
  height: 52px;
  padding: 17px 19px;
  outline: none;
  border: none;
  border-radius: 30px;
  background-color: ${p => p.theme.lightTheme.googleBtnColor};
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.04em;
  color: ${p => p.theme.lightTheme.mainTextColor};

  ::placeholder {
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.04em;
    color: #a6abb9;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 8px;
  @media ${DEVICE.tablet} {
    justify-content: space-between;
    align-items: center;
  }
`;

export const EyeWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    width: 20px;
    height: 20px;
    fill: ${p => p.theme.lightTheme.mainTextColor};
  }
  & button {
    position: absolute;
    top: 28px;
    right: 19px;
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const ErrorValidation = styled.div`
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #eb5757;
  margin-top: 5px;
`;

export const ReminderButton = styled.button`
  position: absolute;
  top: 100%;
  right: 5px;
  font-size: 10px;
  line-height: 1, 2;
  letter-spacing: 0.04em;
  color: ${p => p.theme.lightTheme.mainTextColor};
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 5px;

  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));

  &:hover,
  &:focus {
    transform: scale(0.9);
    color: ${p => p.theme.lightTheme.tableHeadTextColor};
  }
`;
