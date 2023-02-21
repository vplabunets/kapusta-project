import ukrainian from '../../images/flags/ua.png';
import english from '../../images/flags/en.png';

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
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <Menu>
      <Title>Hello, User Name!</Title>
      {/* max 16 symbols*/}
      <Container>
        <SettingsWrapper onClick={toggleModal}>
          <Settings>Profile Settings</Settings>
          <Gear></Gear>
          <Gear></Gear>
        </SettingsWrapper>

        <LanguageWrapper>
          <LanguageSelect>Select language:</LanguageSelect>
          <LanguageButton>
            <FlagImg src={english} alt="english" />
          </LanguageButton>
          <LanguageButton>
            <FlagImg src={ukrainian} alt="ukrainian" />
          </LanguageButton>
        </LanguageWrapper>
      </Container>

      {showModal && <SettingsModal onClose={toggleModal} />}
    </Menu>
  );
};

export default SettingsMenu;
