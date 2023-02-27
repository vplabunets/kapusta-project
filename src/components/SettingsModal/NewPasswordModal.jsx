import { createPortal } from 'react-dom';

import { useTranslation } from 'react-i18next';
import axios from 'axios';
import PropTypes from 'prop-types';

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
    // console.log(oldPassword);
    const res = await axios.post('/users/password-verification', {
      password: oldPassword,
    });
    console.log(res.data.status);
    setStatus(res.data.status);
  };

  const onFormSubmit = evt => {
    evt.preventDefault();
    const newPassword = evt.target.elements.newPassword.value;
    console.log(newPassword);
    if (status) {
      dispatch(userUpdate({ password: newPassword }));
      onClose();
      setStatus(null);
      return;
    }

    return alert('Wrong old password');
  };

  return createPortal(
    <Backdrop>
      <Modal>
        <ButtonClose onClick={onClose}>
          <svg>
            <use href={`${icon}#icon-close`}></use>
          </svg>
        </ButtonClose>
        <Text>{t('Change password')}</Text>
        <Form onSubmit={onFormSubmit}>
          <Label htmlFor="password"> {t('Change password')}</Label>
          <Input
            id="oldPassword"
            type="password"
            name="oldPassword"
            placeholder={t('Old password')}
            maxlength="50"
            minlength="6"
            onBlur={onHandleOldPassword}
          />
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
