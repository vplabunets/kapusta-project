import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';

import { motion } from 'framer-motion';

import icon from 'images/icons-sprite.svg';

import { Button } from 'components/UI/Button/Button';

import {
  Backdrop,
  Modal,
  ButtonClose,
  Text,
  ButtonWrapper,
} from './ConfirmModal.styled';

const body = document.querySelector('body');

const ConfirmModal = ({ text, setModalOpen, onClick }) => {
  const { t } = useTranslation();
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleEscapeClose = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackDropClose = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    body.classList.add('no-scroll-modal');
    window.addEventListener('keydown', handleEscapeClose);

    return () => {
      window.removeEventListener('keydown', handleEscapeClose);
      body.classList.remove('no-scroll-modal');
    };
  });

  return createPortal(
    <Backdrop onClick={handleBackDropClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Modal>
          <ButtonClose onClick={closeModal}>
            <svg>
              <use href={`${icon}#icon-close`}></use>
            </svg>
          </ButtonClose>
          <div>
            <Text>{text}</Text>
            <ButtonWrapper>
              <Button
                closeModal={closeModal}
                type={'button'}
                color={'accent'}
                design={'modal'}
                onClick={onClick}
              >
                {t('modal.YES')}
              </Button>
              <Button
                onClick={closeModal}
                type={'button'}
                color={'white'}
                design={'modal'}
              >
                {t('modal.NO')}
              </Button>
            </ButtonWrapper>
          </div>
        </Modal>
      </motion.div>
    </Backdrop>,
    document.querySelector('#modal-root')
  );
};

ConfirmModal.propTypes = {
  text: PropTypes.string.isRequired,
  setModalOpen: PropTypes.func,
  onClick: PropTypes.func,
};

export default ConfirmModal;
