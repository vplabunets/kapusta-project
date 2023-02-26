import styled from 'styled-components';
import DEVICE from 'constants/deviceSize';
import { TRANSITION } from 'constants/constants';
const { duration, timing, delay } = TRANSITION;

export const Wrapper = styled.div`
  margin-top: 32px;
  z-index: 3;

  @media ${DEVICE.tablet} {
    display: flex;
    justify-content: start;
    align-items: baseline;
    flex-direction: row;

    margin-top: 0px;
  }
  @media ${DEVICE.laptop} {
    justify-content: center;
    align-items: baseline;
    flex-direction: row;
    margin-left: 0;
    flex-grow: 1;
  }
`;
export const Title = styled.h2`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  letter-spacing: 0.02em;
  color: ${p => p.theme.lightTheme.lightGreyColor};

  @media ${DEVICE.tablet} {
    margin-right: 21px;
    margin-left: 36px;
  }
  @media ${DEVICE.laptop} {
    margin-right: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  z-index: 10;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 8px;

  @media ${DEVICE.tablet} {
    align-items: baseline;
    padding: 0;
    margin: 0;
  }
`;

export const Input = styled.input`
  font-family: inherit;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  width: 140px;
  height: 44px;
  padding: 0;
  padding-right: 45px;
  color: ${p => p.theme.lightTheme.tableHeadTextColor};
  text-align: right;
  border: 2px solid ${p => p.theme.lightTheme.headerColor};
  border-radius: 20px 0 0 20px;
  background-color: transparent;
  outline: none;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::-moz-outer-spin-button,
  ::-moz-inner-spin-button {
    -moz-appearance: none;
  }
  ::-ms-outer-spin-button,
  ::-ms-inner-spin-button {
    -ms-appearance: none;
  }

  @media ${DEVICE.tablet} {
    margin-right: 15px;
    padding-right: 45px;
    border-radius: 16px;
    width: 121px;
  }

  @media ${DEVICE.laptop} {
    margin-right: 16px;
    padding-right: 44px;
  }

  &::placeholder {
    font-weight: 700;
    font-size: 13px;
    line-height: 1.17;
    letter-spacing: 0.02em;
    color: ${p => p.theme.lightTheme.tableHeadTextColor};
  }
`;

export const Button = styled.button`
  width: 140px;
  height: 44px;
  font-family: inherit;
  font-size: 13px;
  line-height: 1.17;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: ${p => p.theme.lightTheme.lightGreyColor};
  border: 2px solid ${p => p.theme.lightTheme.headerColor};
  border-left: none;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
  background-color: transparent;

  transition: color ${duration} ${timing} ${delay},
    background-color ${duration} ${timing} ${delay},
    border-color ${duration} ${timing} ${delay};

  &:focus,
  &:hover {
    color: ${p => p.theme.lightTheme.whiteTextColor};
    background-color: ${p => p.theme.lightTheme.accentColor};
    border-color: ${p => p.theme.lightTheme.accentColor};
  }

  @media ${DEVICE.tablet} {
    width: 125px;
    border-radius: 16px;
    border: 2px solid ${p => p.theme.lightTheme.headerColor};
    justify-content: center;
    padding: 0;
  }
`;
export const Label = styled.label`
  position: absolute;
  top: 16px;
  right: 15px;
  font-weight: 700;
  font-style: normal;
  font-size: 12px;
  line-height: 14px;
  text-transform: none;

  @media ${DEVICE.tablet} {
    margin-right: 20px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  position: relative;
`;
