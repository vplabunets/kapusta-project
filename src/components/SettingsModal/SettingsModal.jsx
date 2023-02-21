import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import PropTypes from 'prop-types';

import { Button } from 'components/UI/Button/Button';
import icon from 'images/icons-sprite.svg';

import {
  Backdrop,
  Modal,
  ButtonClose,
  ButtonWrapper,
  Text,
  DropFiles,
  DropFilesTitle,
  DropFilesInput,
  Form,
  Label,
  NameInput,
} from './SettingsModal.styled';

const modalRoot = document.querySelector('#modal-root');

const SettingsModal = ({ onClose }) => {
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
      <Modal>
        <ButtonClose onClick={onClose}>
          <svg>
            <use href={`${icon}#icon-close`}></use>
          </svg>
        </ButtonClose>

        <Text>Profile Settings</Text>
        <Form>
          <div>
            <Label htmlFor="name"> Change Name</Label>
            <NameInput
              id="name"
              type="text"
              name="name"
              placeholder="Write your new name"
              maxlength="8"
              minlength="2"
            />

            <Label htmlFor="avatar"> Set/Change Avatar</Label>
            <DropFiles>
              <DropFilesTitle>Drop image here</DropFilesTitle>
              or
              <DropFilesInput
                type="file"
                name="avatar"
                id="avatar"
                accept="image/*"
              />
            </DropFiles>
          </div>
          <ButtonWrapper>
            <Button type={'submit'} color={'accent'} design={'modal'}>
              CONFIRM
            </Button>
            <Button
              onClick={onClose}
              type={'button'}
              color={'white'}
              design={'modal'}
            >
              CANCEL
            </Button>
          </ButtonWrapper>
        </Form>
      </Modal>
    </Backdrop>,

    modalRoot
  );
};

SettingsModal.propTypes = {
  onClose: PropTypes.func,
};

export default SettingsModal;
