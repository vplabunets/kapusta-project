import OperationsForm from 'components/OperationsForm/OperationsForm';
import React from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Modal } from './OperationsAddModal.styled';

const OperationsAddModal = () => {
  return createPortal(
    <Backdrop>
      <Modal>
        <OperationsForm />
      </Modal>
    </Backdrop>,
    document.querySelector('#modal-root')
  );
};

export default OperationsAddModal;
