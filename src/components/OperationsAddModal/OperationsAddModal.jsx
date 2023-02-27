import React from 'react';
import { PropTypes } from 'prop-types';
import { createPortal } from 'react-dom';
import Icons from 'images/icons-sprite.svg';

import OperationsForm from 'components/OperationsForm/OperationsForm';

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

OperationsAddModal.propTypes = {
  setIsOpen: PropTypes.func,
};

export default OperationsAddModal;
