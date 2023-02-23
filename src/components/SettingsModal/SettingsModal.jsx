import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

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
  DragFileElement,
} from './SettingsModal.styled';
import { useTranslation } from 'react-i18next';
const modalRoot = document.querySelector('#modal-root');

const SettingsModal = ({ onClose }) => {
  const { t } = useTranslation();

  const [dragActive, setDragActive] = useState(false);
  // const [isUpload, setIsUpload] = useState(false);
  // const [fileName, setFileName] = useState('');

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

  const onFormSubmit = evt => {
    evt.preventDefault();
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
          <NameInput
            id="name"
            type="text"
            name="name"
            placeholder={t('modal.Write your new name')}
            maxlength="16"
            minlength="2"
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
              />
            </DropFiles>
          </Label>

          <ButtonWrapper>
            <Button type={'submit'} color={'accent'} design={'modal'}>
              {t('button.CONFIRM')}
            </Button>
            <Button
              onClick={onClose}
              type={'button'}
              color={'white'}
              design={'modal'}
            >
              {t('button.CANCEL')}
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
  onClose: PropTypes.func,
};

export default SettingsModal;
