import { useTranslation } from 'react-i18next';

import ukrainian from '../../images/flags/ua.png';
import english from '../../images/flags/en.png';

import {
  FlagImg,
  LanguageButton,
  LanguageBtnWrapper,
} from './SettingsMenu.styled';

const LanguageButtons = ({ position }) => {
  const { i18n } = useTranslation();
  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };
  return (
    <LanguageBtnWrapper>
      <LanguageButton onClick={() => changeLanguage('en')}>
        <FlagImg src={english} alt="english" position={position} />
      </LanguageButton>
      <LanguageButton onClick={() => changeLanguage('ua')}>
        <FlagImg src={ukrainian} alt="ukrainian" position={position} />
      </LanguageButton>
    </LanguageBtnWrapper>
  );
};

export default LanguageButtons;
