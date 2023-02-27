import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

import axios from 'axios';
import { useTranslation } from 'react-i18next';

import { userUpdate } from 'redux/auth/operations';

import icon from 'images/icons-sprite.svg';

import { Button } from 'components/UI/Button/Button';

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
  Input,
  DragFileElement,
} from './SettingsModal.styled';

const modalRoot = document.querySelector('#modal-root');

const SettingsModal = ({ onClose }) => {
  const { t } = useTranslation();
  const [dragActive, setDragActive] = useState(false);
  const [image, setImage] = useState(null);
  // const [isUpload, setIsUpload] = useState(false);
  // const [fileName, setFileName] = useState('');

  const dispatch = useDispatch();

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

  const onUpload = files => {
    console.log(files[0].name);
    // dispatch(userUpdate({ avatarUrl: image }));
    // setFileName(files[0].name);
    // setIsUpload(true);
  };

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
      console.log(dragActive);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
      console.log(dragActive);
    }
  };
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // at least one file has been dropped so do something
      // handleFiles(e.dataTransfer.files);
      onUpload(e.dataTransfer.files);
    }
  };

  const handleChangeImage = async evt => {
    try {
      const formData = new FormData();
      formData.append('image', evt.target.files[0]);

      const res = await axios.post(
        'https://kapusta-project-back-production.up.railway.app/upload',
        formData
      );
      console.log(res.data.url);
      setImage(res.data.url);
    } catch (error) {
      console.error(error);
    }
  };

  const onFormSubmit = evt => {
    evt.preventDefault();
    const newImage = evt.target.elements.avatar.value;
    const newName = evt.target.elements.name.value;
    if (newName) {
      dispatch(userUpdate({ userName: newName }));
    }

    if (newImage) {
      dispatch(userUpdate({ avatarUrl: image }));
    }

    onClose();
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <Modal>
        <ButtonClose onClick={onClose}>
          <svg>
            <use href={`${icon}#icon-close`}></use>
          </svg>
        </ButtonClose>
        <Text>{t('menu.Profile Settings')}</Text>
        <Form onDragEnter={handleDrag} onSubmit={onFormSubmit}>
          <Label htmlFor="name"> {t('modal.Change Name')}</Label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder={t('modal.Write your new name')}
            maxlength="16"
            minlength="2"
          />
          <Label htmlFor="password"> {t('Change password')}</Label>
          <Input
            id="old-password"
            type="password"
            name="old-password"
            placeholder={t('Old password')}
            maxlength="50"
            minlength="6"
          />
          <Input
            id="new-password"
            type="password"
            name="old-password"
            placeholder={t('New password')}
            maxlength="50"
            minlength="6"
          />
          <Label htmlFor="avatar">
            {t('modal.Set/Change Avatar')}
            <DropFiles dragActive={dragActive}>
              <DropFilesTitle> {t('modal.Drop image here')}</DropFilesTitle>
              {t('modal.or')}
              {/* <p>click to select file</p> */}
              <DropFilesInput
                type="file"
                name="avatar"
                id="avatar"
                accept="image/*"
                onChange={handleChangeImage}
              />
            </DropFiles>
          </Label>
          <ButtonWrapper>
            <Button
              type={'submit'}
              color={'accent'}
              design={'modal'}
              // onSubmit={onFormSubmit}
            >
              {t('button.CONFIRM')}
            </Button>
          </ButtonWrapper>
          {dragActive && (
            <DragFileElement
              id="drag-file-element"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            ></DragFileElement>
          )}
        </Form>
      </Modal>
    </Backdrop>,

    modalRoot
  );
};

SettingsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SettingsModal;
