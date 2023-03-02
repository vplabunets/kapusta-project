import { motion } from 'framer-motion';
import styled from 'styled-components';
import DEVICE from 'constants/deviceSize';
import { TRANSITION } from 'constants/constants';
const { duration, timing, delay } = TRANSITION;

const Backdrop = styled.div`
  z-index: 13;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;
const Modal = styled(motion.div)`
  position: relative;

  width: 100%;
  height: 610px;

  background-color: ${p => p.theme.headerColor};
  border-radius: 30px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 40px 40px 50px;

  @media screen and (min-width: 420px) {
    width: 380px;
    padding: 50px 58px 60px;
  }
`;
const ButtonClose = styled.button`
  cursor: pointer;
  font-family: inherit;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  transition: transform ${duration} ${timing} ${delay};

  & svg {
    width: 12px;
    height: 12px;
  }

  &:focus,
  &:hover {
    transform: scale(0.9);
  }
`;
const Text = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  color: ${p => p.theme.mainTextColor};
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-family: inherit;
  display: block;
  /* height: 120px; */
  margin-bottom: 8px;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: ${p => p.theme.tableHeadTextColor};

  @media ${DEVICE.tablet} {
    font-size: 12px;
    line-height: 1.16;
  }
`;

const Input = styled.input`
  font-family: inherit;
  margin-bottom: 20px;
  width: 100%;
  height: 52px;
  padding: 17px 19px;
  outline: none;
  border: ${p => {
    switch (p.status) {
      case false:
        return ` 2px solid ${p.theme.expensesTextColor}`;
      case true:
        return `2px solid ${p.theme.incomesTextColor}`;
      default:
        return `none`;
    }
  }};
  border-radius: 30px;
  background-color: ${p => p.theme.googleBtnColor};
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.04em;
  color: ${p => p.theme.mainTextColor};
  ::placeholder {
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.04em;
    color: #a6abb9;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

const CabbageWrap = styled.div`
  display: flex;
`;

export {
  Backdrop,
  Modal,
  ButtonClose,
  ButtonWrapper,
  Text,
  Form,
  Label,
  Input,
  CabbageWrap,
};
