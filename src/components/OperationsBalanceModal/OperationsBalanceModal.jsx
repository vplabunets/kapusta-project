import React, { useEffect } from 'react';
import { Backdrop, Text, Title, Modal } from './OperationsBalanceModalstyled';
const body = document.querySelector('body');

const OperationsBalanceModal = () => {
  useEffect(() => {
    body.style.cssText = `overflow: hidden`;
  }, []);

  return (
    <Backdrop>
      <Modal>
        <Title>
          Hello! To get started, enter the current balance of your account!
        </Title>
        <Text>You can't spend money until you have it</Text>
      </Modal>
    </Backdrop>
  );
};
export default OperationsBalanceModal;
