import React from 'react';
import { createPortal } from 'react-dom';
import { PropTypes } from 'prop-types';

import { motion } from 'framer-motion';

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
      <motion.div
        initial={{ opacity: 0, translateX: -500 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: -500 }}
        transition={{ duration: 0.7 }}
      >
        <Modal>
          <BackBtn onClick={() => setIsOpen(false)}>
            <svg width="24" height="24">
              <use href={`${Icons}#icon-arrow-back`}></use>
            </svg>
          </BackBtn>
          <OperationsForm />
        </Modal>
      </motion.div>
    </Backdrop>,
    document.querySelector('#modal-root')
  );
};

OperationsAddModal.propTypes = {
  setIsOpen: PropTypes.func,
};

export default OperationsAddModal;
