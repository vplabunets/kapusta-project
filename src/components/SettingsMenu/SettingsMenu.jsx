import ukrainian from '../../images/flags/ua.png';
import english from '../../images/flags/en.png';
import { useTranslation } from 'react-i18next';
import SettingsModal from 'components/SettingsModal/SettingsModal';

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
} from './SettingsMenu.styled';
import { useState } from 'react';

const SettingsMenu = () => {
  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <Menu>
      <Title>{t('menu.Hello, User Name')}!</Title>
      {/* max 16 symbols*/}
      <Container>
        <SettingsWrapper onClick={toggleModal}>
          <Settings>{t('menu.Profile Settings')}</Settings>
          <Gear></Gear>
          <Gear></Gear>
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
  );
};

export default SettingsMenu;
