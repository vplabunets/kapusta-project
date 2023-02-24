import { createPortal } from 'react-dom';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

import { Backdrop, Modal, Text, SubText } from './CongratulationsModal.styled';
import { Button } from 'components/UI/Button/Button';

export const CongratulationsModal = () => {
  const { width, height } = useWindowSize();

  return createPortal(
    <>
      <Backdrop>
        <Modal>
          <Text>Welcome to our Smart Finance App!</Text>
          <SubText>
            Is your money flying away like cabbage in our background? It's not a
            problem anymore! Because now we will help you control your finances.
            Don't thank
          </SubText>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="button" design="home" color="accent">
              Let's start
            </Button>
          </div>
        </Modal>
      </Backdrop>
      <Confetti width={width} height={height} />
    </>,
    document.querySelector('#modal-root')
  );
};
