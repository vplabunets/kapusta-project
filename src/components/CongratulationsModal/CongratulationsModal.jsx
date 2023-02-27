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

export const CongratulationsModal = () => {
  const { width, height } = useWindowSize();
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
              {t('firstModal.subText')}? {t('firstModal.subText2')}!{' '}
              {t('firstModal.subText3')}.{t('firstModal.subText4')}
            </SubText>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type="button"
                design="home"
                color="accent"
                onClick={() => dispatch(changeFirstVisit())}
              >
                {isLoading ? <Spinner width={25} height={25} /> : "Let's start"}
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
