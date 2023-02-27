/* eslint-disable react-hooks/exhaustive-deps */
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import useWindowSize from 'react-use/lib/useWindowSize';
import { useTranslation } from 'react-i18next';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

import { changeFirstVisit } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/auth/selectors';

import Spinner from 'components/UI/Loader/Loader';
import { Button } from 'components/UI/Button/Button';

import { Backdrop, Modal, Text, SubText } from './CongratulationsModal.styled';
import { useEffect } from 'react';

export const CongratulationsModal = () => {
  const { width, height } = useWindowSize();
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const Start = t('firstModal.start');

  const body = document.querySelector('body');

  useEffect(() => {
    body.classList.add('no-scroll');
  }, []);

  const onConfirm = () => {
    dispatch(changeFirstVisit());
    body.classList.remove('no-scroll');
  };


  return createPortal(
    <>
      <Backdrop>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Modal>
            <Text>{t('firstModal.welcome')}!</Text>
            <SubText>
              {t('firstModal.subText')}😎
            </SubText>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type="button"
                design="home"
                color="accent"
                onClick={onConfirm}
              >
                {isLoading ? <Spinner width={25} height={25} /> : Start}
              </Button>
            </div>
          </Modal>
        </motion.div>
      </Backdrop>
      <Confetti width={width} height={height} />
    </>,
    document.querySelector('#modal-root')
  );
};
