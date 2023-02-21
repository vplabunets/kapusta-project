import styled from 'styled-components';
import { Field } from 'formik';

import device from 'constants/deviceSize';

export const MainWrapper = styled.div`
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 426px;

  padding: 40px 20px;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 30px;

  @media ${device.tablet} {
    max-width: 426px;
    width: 426px;
    padding: 56px 83px;
  }

  @media ${device.laptop} {
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

  color: #52555f;

  @media ${device.laptop} {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 122px;
  height: 40px;
  margin: 0 auto 32px;
  background-color: #f6f7fb;
  border: none;
  border-radius: 26px;
  cursor: pointer;

  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;

  letter-spacing: 0.02em;
  color: #000000;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
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

  color: #52555f;

  @media ${device.laptop} {
    width: 250px;
    margin-bottom: 20px;
  }
`;

export const AuthFormLabel = styled.label`
  display: block;
  margin-bottom: 12px;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #000000;
  :nth-of-type(2) {
    margin-top: 20px;
  }
  @media ${device.tablet} {
    font-size: 12px;
    line-height: 1.16;
    :nth-of-type(2) {
      margin-top: 32px;
    }
  }
`;

export const Input = styled(Field)`
  font-family: inherit;
  margin-top: 12px;
  width: 100%;
  height: 52px;
  padding: 17px 19px;
  outline: none;
  border: none;
  border-radius: 30px;
  background-color: #f6f7fb;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.04em;
  color: #52555f;
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
  margin: 0 4px;
  padding-top: 28px;
  gap: 8px;
  @media ${device.tablet} {
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
    fill: #52555f;
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
