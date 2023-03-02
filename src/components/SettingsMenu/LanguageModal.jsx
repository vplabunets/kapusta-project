import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import icon from 'images/icons-sprite.svg';

import { Backdrop, Modal, ButtonClose, Text } from './LanguageModal.styled';
import LanguageSwitcher from './LanguageSwitcher';

const modalRoot = document.querySelector('#modal-root');

const LanguageModal = ({ onClose }) => {
  const { t } = useTranslation();
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const onBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Modal>
          <ButtonClose onClick={onClose}>
            <svg>
              <use href={`${icon}#icon-close`}></use>
            </svg>
          </ButtonClose>
          <div>
            <Text>{t('menu.Select language')}:</Text>
            <LanguageSwitcher position="menu" onClose={onClose} />
            {/* <ButtonWrapper>
              <Button onClick={closeModal} type={'button'}>
                {t('modal.YES')}
              </Button>
            </ButtonWrapper> */}
          </div>
        </Modal>
      </motion.div>
    </Backdrop>,
    modalRoot
  );
};

LanguageModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default LanguageModal;
