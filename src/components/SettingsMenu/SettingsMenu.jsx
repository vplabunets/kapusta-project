import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { selectName } from 'redux/auth/selectors';

// import ukrainian from 'images/flags/ua.png';
// import english from 'images/flags/en.png';

import SettingsModal from 'components/SettingsModal/SettingsModal';

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
} from './SettingsMenu.styled';
import LanguageSwitcher from './LanguageSwitcher';

const SettingsMenu = ({ setMenuOpen }) => {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);

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
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
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
            {t('menu.Hello')}, {toCutName(userName)}!
          </Title>
          {/* max 16 symbols*/}
          <Container>
            <SettingsWrapper onClick={toggleModal}>
              <Settings>{t('menu.Profile Settings')}</Settings>
              <GearsWrapper>
                <Gear></Gear>
                <Gear></Gear>
              </GearsWrapper>
            </SettingsWrapper>
            <LanguageWrapper>
              <LanguageSelect>{t('menu.Select language')}:</LanguageSelect>
              <LanguageButtons position="menu" />
            </LanguageWrapper>
            {showModal && <SettingsModal onClose={toggleModal} />}
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
