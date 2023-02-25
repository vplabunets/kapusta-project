import { createPortal } from 'react-dom';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { changeFirstVisit } from 'redux/auth/operations';

import { Backdrop, Modal, Text, SubText } from './CongratulationsModal.styled';
import { Button } from 'components/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/selectors';
import Spiner from 'components/UI/Loader/Loader';

export const CongratulationsModal = () => {
  const { width, height } = useWindowSize();
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

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
            <Button
              type="button"
              design="home"
              color="accent"
              onClick={() => dispatch(changeFirstVisit())}
              // onClick={() => console.log('lololo')}
            >
              {isLoading ? <Spiner width={25} height={25} /> : "Let's start"}
            </Button>
          </div>
        </Modal>
      </Backdrop>
      <Confetti width={width} height={height} />
    </>,
    document.querySelector('#modal-root')
  );
};
