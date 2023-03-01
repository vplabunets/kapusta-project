import styled from 'styled-components';
import DEVICE from 'constants/deviceSize';
import { TRANSITION } from 'constants/constants';
const { duration, timing, delay } = TRANSITION;

const Backdrop = styled.div`
  z-index: 12;
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

const Modal = styled.div`
  position: relative;
  min-width: 280px;
  height: 550px;

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
  display: block;
  /* height: 120px; */
  margin-bottom: 8px;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  font-family: inherit;
  color: ${p => p.theme.tableHeadTextColor};

  @media ${DEVICE.tablet} {
    font-size: 12px;
    line-height: 1.16;
  }
`;

const Input = styled.input`
  margin-bottom: 20px;
  width: 100%;
  height: 52px;
  padding: 17px 19px;
  outline: none;
  border: none;
  border-radius: 30px;
  background-color: ${p => p.theme.googleBtnColor};
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.04em;
  font-family: inherit;
  color: ${p => p.theme.mainTextColor};
  ::placeholder {
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.04em;
    color: #a6abb9;
  }
`;

const ChangePasswordBtn = styled.button`
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
  margin-bottom: 30px;
  background-color: ${p => p.theme.tableHeadBackgroundColor};
  color: ${p => p.theme.btnGreyColor};
  transition: transform ${duration} ${timing} ${delay};

  &:hover,
  &:focus {
    transform: scale(0.9);
  }
`;

const DropFiles = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  padding: 10px;

  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px dashed ${p => p.theme.mainTextColor};
  color: ${p => p.theme.mainTextColor};
  cursor: pointer;
  transition: background ${duration} ${timing} ${delay};

  &:hover {
    background: ${p => p.theme.googleBtnColor};
    border-color: ${p => p.theme.tableHeadTextColor};
  }

  @media ${DEVICE.tablet} {
    padding: 20px;
    gap: 10px;
  }
`;

const DropFilesTitle = styled.span`
  font-family: inherit;
  color: ${p => p.theme.mainTextColor};
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  transition: color ${duration} ${timing} ${delay};
  @media ${DEVICE.tablet} {
    font-size: 15px;
  }
`;

const DropFilesInput = styled.input`
  font-family: inherit;
  width: 350px;
  max-width: 100%;
  color: ${p => p.theme.mainTextColor};
  padding: 3px;
  border-radius: 10px;
  border: none;
  &.dragover {
    background: ${p => p.theme.googleBtnColor};
    border-color: ${p => p.theme.tableHeadTextColor};
  }
  &::file-selector-button {
    font-family: inherit;
    margin-right: 10px;
    border: none;
    background: ${p => p.theme.accentColor};
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 10px;
    color: ${p => p.theme.whiteTextColor};
    cursor: pointer;
    transition: transform ${duration} ${timing} ${delay};
    @media ${DEVICE.tablet} {
      font-size: 12px;
      padding: 10px 20px;
    }
  }
  &::file-selector-button:hover {
    transform: scale(0.9);
  }

  @media ${DEVICE.tablet} {
    padding: 5px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const DragFileElement = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const PictureWrap = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: aliceblue;
  overflow: hidden;
  border: 2px solid #3ab37c;
  margin-bottom: 7px;
`;

const DoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  & > p {
    color: #3ab37c;
    font-size: 17px;
    font-weight: 500;
  }
`;

export {
  Backdrop,
  Modal,
  ButtonClose,
  ButtonWrapper,
  Text,
  DropFilesTitle,
  DropFiles,
  DropFilesInput,
  PictureWrap,
  Form,
  Label,
  Input,
  DragFileElement,
  ChangePasswordBtn,
  DoneWrapper,
  TextWrapper,
};
