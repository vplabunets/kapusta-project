import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';
import { Avatar } from '@mui/material';

import ExitIcon from 'images/icons-sprite.svg';

import { selectEmail, selectName, selectAvatar } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

import ConfirmModal from 'components/ConfirmModal/ConfirmModal';
import SettingsMenu from 'components/SettingsMenu/SettingsMenu';

import {
  Container,
  ExitBtn,
  UserName,
  ExitContainer,
  LogoutBtn,
  MenuBtn,
} from './NavBar.styles';

const NavBar = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const email = useSelector(selectEmail);
  const name = useSelector(selectName);
  const avatar = useSelector(selectAvatar);
  const body = document.querySelector('body');

  const { t } = useTranslation();
  const toCutName = email => {
    const firstLetter = email.slice(0, 1).toUpperCase();
    return firstLetter;
  };

  const onUserClick = evt => {
    setIsMenuOpen(!isMenuOpen);
    body.classList.toggle('no-scroll');
  };

  const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <>
      <Container>
        <MenuBtn onClick={onUserClick}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              color: 'rgba(82, 85, 95, 1)',
              backgroundColor: getRandomHexColor(),
              fontWeight: 700,
              fontSize: '12px',
              cursor: 'pointer',
              lineHeight: 1.17,
            }}
            src={
              avatar.includes('https://lh3.googleusercontent.com')
                ? avatar
                : `https://kapusta-project-back.onrender.com${avatar}`
            }
          >
            {!avatar && name ? toCutName(name) : toCutName(email)}
          </Avatar>
        </MenuBtn>
        <ExitContainer>
          <UserName onClick={onUserClick}>{name ? name : email}</UserName>
          <ExitBtn onClick={() => setModalOpen(true)}>{t('Exit')}</ExitBtn>
        </ExitContainer>
        <LogoutBtn onClick={() => setModalOpen(true)}>
          <svg alt="exit" width={16} height={16}>
            <use href={`${ExitIcon}#icon-logout`}></use>
          </svg>
        </LogoutBtn>
        {isMenuOpen === true && <SettingsMenu setMenuOpen={onUserClick} />}
      </Container>
      {modalOpen && (
        <ConfirmModal
          setModalOpen={setModalOpen}
          text={t('exitText')}
          onClick={() => dispatch(logOut())}
        />
      )}
    </>
  );
};

export default NavBar;
