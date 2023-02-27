import styled from 'styled-components';
import DEVICE from 'constants/deviceSize';
import TRANSITION from 'constants/constants';

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
  height: 650px;

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
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

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
  color: ${p => p.theme.mainTextColor};
  ::placeholder {
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.04em;
    color: #a6abb9;
  }
`;

const DropFiles = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120px;
  padding: 10px;

  margin-bottom: 30px;
  border-radius: 10px;
  border: 2px dashed #555;
  color: #444;
  cursor: pointer;
  transition: background ${TRANSITION.duration} ${TRANSITION.timing};

  &:hover {
    background: ${p => p.theme.googleBtnColor};
    border-color: ${p => p.theme.tableHeadTextColor};
  }

  @media ${DEVICE.tablet} {
    height: 150px;
    padding: 20px;
    gap: 10px;
  }
`;

const DropFilesTitle = styled.span`
  font-family: inherit;
  color: #444;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  transition: color ${TRANSITION.duration} ${TRANSITION.timing};
  @media ${DEVICE.tablet} {
    font-size: 15px;
  }
`;

const DropFilesInput = styled.input`
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
    transition: transform ${TRANSITION.duration} ${TRANSITION.timing};
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

export {
  Backdrop,
  Modal,
  ButtonClose,
  ButtonWrapper,
  Text,
  DropFilesTitle,
  DropFiles,
  DropFilesInput,
  Form,
  Label,
  Input,
  DragFileElement,
};
