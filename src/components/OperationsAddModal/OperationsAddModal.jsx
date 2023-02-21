import OperationsForm from 'components/OperationsForm/OperationsForm';
import React from 'react';
import { createPortal } from 'react-dom';
import Icons from 'images/icons-sprite.svg';

import {
  Backdrop,
  Modal,
  Background,
  BackBtn,
} from './OperationsAddModal.styled';

const OperationsAddModal = ({ setIsOpen }) => {
  return createPortal(
    <Backdrop>
      <Background />
      <Modal>
        <BackBtn onClick={() => setIsOpen(false)}>
          <svg width="24" height="24">
            <use href={`${Icons}#icon-arrow-back`}></use>
          </svg>
        </BackBtn>
        <OperationsForm />
      </Modal>
    </Backdrop>,
    document.querySelector('#modal-root')
  );
};

export default OperationsAddModal;
