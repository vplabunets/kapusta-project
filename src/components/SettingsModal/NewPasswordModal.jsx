import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { instans } from 'utils/axiosDefault';
import { useTranslation } from 'react-i18next';

import { toast } from 'react-toastify';

import { Button } from 'components/UI/Button/Button';
import { Cabbage } from 'components/UI/Cabbage/Cabbage';
import icon from 'images/icons-sprite.svg';

import {
  Backdrop,
  Modal,
  ButtonClose,
  ButtonWrapper,
  Text,
  Form,
  Label,
  Input,
  CabbageWrap,
} from './NewPasswordModal.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userUpdate } from 'redux/auth/operations';

const modalRoot = document.querySelector('#modal-root');

const NewPasswordModal = ({ onClose }) => {
  const { t } = useTranslation();
  const [status, setStatus] = useState(null);

  const dispatch = useDispatch();

  const onHandleOldPassword = async evt => {
    const oldPassword = evt.currentTarget.value;
    const res = await instans.post('/users/password-verification', {
      password: oldPassword,
    });
    setStatus(res.data.status);
  };

  const onFormSubmit = evt => {
    evt.preventDefault();
    const newPassword = evt.target.elements.newPassword.value;
    if (status) {
      dispatch(userUpdate({ password: newPassword }));
      onClose();
      setStatus(null);
      return;
    }

    return toast.error('Old password is wrong. Please try again');
  };

  return createPortal(
    <Backdrop>
      <Modal
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <ButtonClose onClick={onClose}>
          <svg>
            <use href={`${icon}#icon-close`}></use>
          </svg>
        </ButtonClose>
        <Text>{t('Change password')}</Text>
        <Form onSubmit={onFormSubmit}>
          <Label htmlFor="oldPassword"> {t('Enter old password')}</Label>
          <Input
            id="oldPassword"
            type="password"
            name="oldPassword"
            placeholder={t('Old password')}
            maxlength="50"
            minlength="6"
            onBlur={onHandleOldPassword}
            status={status}
          />
          <Label htmlFor="newPassword"> {t('Enter new password')}</Label>
          <Input
            id="newPassword"
            type="password"
            name="newPassword"
            placeholder={t('New password')}
            maxlength="50"
            minlength="6"
          />
          <ButtonWrapper>
            <Button type={'submit'} color={'accent'} design={'modal'}>
              {t('button.CONFIRM')}
            </Button>
          </ButtonWrapper>
        </Form>
        <CabbageWrap>
          <Cabbage />
          <Cabbage position={true} />
        </CabbageWrap>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};

NewPasswordModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default NewPasswordModal;
