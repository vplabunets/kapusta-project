import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

import { Backdrop, Text, Title, Modal } from './OperationsBalanceModal.styled';

const body = document.querySelector('body');

const OperationsBalanceModal = () => {
  useEffect(() => {
    body.classList.add('no-scroll');
  }, []);

  const { t } = useTranslation();
  return createPortal(
    <Backdrop>
      <Modal>
        <Title>{t('balanceModalTitle')}!</Title>
        <Text>{t('balanceModalText')} </Text>
      </Modal>
    </Backdrop>,
    document.querySelector('#modal-root')
  );
};
export default OperationsBalanceModal;
