import React from 'react';
import {
  Backdrop,
  Text,
  Title,
  Modal
} from './OperationsBalanceModalstyled';


const OperationsBalanceModal = () => {
  return (
      <Backdrop >
    <Modal>
      <Title>
        Hello! To get started, enter the current balance of your account!
      </Title>
      <Text>
        You can't spend money until you have it
      </Text>
    </Modal>
  </Backdrop>
  )

}
export default OperationsBalanceModal;
