import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { userUpdate } from 'redux/auth/operations';

import icon from 'images/icons-sprite.svg';
import NewPasswordModal from './NewPasswordModal';

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
  ChangePasswordBtn,
} from './SettingsModal.styled';
import { instans } from 'utils/axiosDefault';

const modalRoot = document.querySelector('#modal-root');

const SettingsModal = ({ onClose }) => {
  const { t } = useTranslation();
  const [dragActive, setDragActive] = useState(false);
  const [image, setImage] = useState(null);
  //const [picture, setPicture] = useState(null);
  const [showModalPassword, setShowModalPassword] = useState(false);
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
    setImage(files[0].name);
    // dispatch(userUpdate({ avatarUrl: image }));
    // setFileName(files[0].name);
    // setIsUpload(true);
  };
  const onPasswordModalToggle = () => {
    setShowModalPassword(prevState => !prevState);
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
      // const img = URL.createObjectURL(evt.target.files[0]);
      // setPicture(URL.createObjectURL(evt.target.files[0]));
      const res = await instans.post(
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

    // const newImage = evt.target.elements.avatar.value;
    const newName = evt.target.elements.name.value;
    if (newName) {
      dispatch(userUpdate({ userName: newName }));
    }

    if (image) {
      dispatch(userUpdate({ avatarUrl: image }));
    }

    onClose();
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
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
            <Label htmlFor="avatar">
              {t('modal.Set/Change Avatar')}
              <DropFiles dragActive={dragActive}>
                {image ? (
                  <p>Done</p>
                ) : (
                  <>
                    <DropFilesTitle>
                      {t('modal.Drop image here')}
                    </DropFilesTitle>
                    {t('modal.or')}
                    {/* <p>click to select file</p> */}
                    <DropFilesInput
                      type="file"
                      name="avatar"
                      id="avatar"
                      accept="image/*"
                      onChange={handleChangeImage}
                    />
                  </>
                )}
              </DropFiles>
            </Label>

            <ChangePasswordBtn type="button" onClick={onPasswordModalToggle}>
              {t('Change password')}
            </ChangePasswordBtn>
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
        {showModalPassword && (
          <NewPasswordModal onClose={onPasswordModalToggle} />
        )}
      </motion.div>
    </Backdrop>,

    modalRoot
  );
};

SettingsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SettingsModal;
