import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { selectEmail, selectName } from 'redux/auth/selectors';

import SettingsModal from 'components/SettingsModal/SettingsModal';
import LanguageModal from './LanguageModal';
import icons from 'images/icons-sprite.svg';

import {
  Menu,
  Title,
  Settings,
  LanguageSelect,
  SettingsWrapper,
  LanguageWrapper,
  Container,
  Gear,
  Backdrop,
  GearsWrapper,
  Globe,
} from './SettingsMenu.styled';

const SettingsMenu = ({ setMenuOpen }) => {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);
  const [showModalLng, setShowModalLng] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onKeyDown = e => {
    if (e.code === 'Escape') {
      setMenuOpen();
    }
  };

  const userName = useSelector(selectName);
  const email = useSelector(selectEmail);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  const toggleModalLng = () => {
    setShowModalLng(prevState => !prevState);
  };

  const toCutName = name => {
    if (name.length >= 18) {
      const shortName = `${name.slice(0, 17)}...`;
      return shortName;
    }
    return name;
  };

  const onBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      setMenuOpen();
    }
  };

  return (
    <Backdrop onClick={onBackdropClick}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Menu>
          <Title>
            {t('menu.Hello')},{' '}
            {userName ? toCutName(userName) : toCutName(email)}!
          </Title>
          {/* max 16 symbols*/}
          <Container>
            <SettingsWrapper onClick={toggleModal}>
              <Settings>{t('menu.Profile Settings')}</Settings>
              <GearsWrapper>
                <Gear>
                  <use href={`${icons}#icon-gear`}></use>
                </Gear>
                <Gear>
                  <use href={`${icons}#icon-gear`}></use>
                </Gear>
              </GearsWrapper>
            </SettingsWrapper>
            <LanguageWrapper onClick={toggleModalLng}>
              <LanguageSelect>{t('menu.Select language')}</LanguageSelect>
              {/* <LanguageSwitcher position="menu" /> */}
              <Globe>
                <use href={`${icons}#icon-earth`}></use>
              </Globe>
            </LanguageWrapper>
            {showModal && <SettingsModal onClose={toggleModal} />}
            {showModalLng && <LanguageModal onClose={toggleModalLng} />}
          </Container>
        </Menu>
      </motion.div>
    </Backdrop>
  );
};

SettingsMenu.propTypes = {
  setMenuOpen: PropTypes.func.isRequired,
};

export default SettingsMenu;
