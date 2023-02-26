import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';

import { useTranslation } from 'react-i18next';

import ukrainian from '../../images/flags/ua.png';
import english from '../../images/flags/en.png';

import SettingsModal from 'components/SettingsModal/SettingsModal';
import { selectName } from 'redux/auth/selectors';

import {
  Menu,
  Title,
  Settings,
  LanguageSelect,
  FlagImg,
  LanguageButton,
  SettingsWrapper,
  LanguageWrapper,
  Container,
  Gear,
  Backdrop,
  GearsWrapper,
} from './SettingsMenu.styled';

const SettingsMenu = ({ setMenuOpen }) => {
  const [showModal, setShowModal] = useState(false);

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  const { t, i18n } = useTranslation();

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
            <LanguageButton onClick={() => changeLanguage('en')}>
              <FlagImg src={english} alt="english" />
            </LanguageButton>
            <LanguageButton onClick={() => changeLanguage('ua')}>
              <FlagImg src={ukrainian} alt="ukrainian" />
            </LanguageButton>
          </LanguageWrapper>
        </Container>

        {showModal && <SettingsModal onClose={toggleModal} />}
      </Menu>
    </Backdrop>
  );
};

SettingsMenu.propTypes = {
  setMenuOpen: PropTypes.func.isRequired,
};

export default SettingsMenu;
