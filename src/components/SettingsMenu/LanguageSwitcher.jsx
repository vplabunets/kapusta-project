import { useState } from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

import ukrainian from 'images/flags/ua.png';
import english from 'images/flags/en.png';
import turkish from 'images/flags/tr.png';

import {
  FlagImg,
  LanguageButton,
  LanguageBtnWrapper,
} from './SettingsMenu.styled';

const LanguageSwitcher = ({ position }) => {
  const [current, setCurrent] = useState('');

  const { i18n } = useTranslation();
  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  const onChange = (lang, evt) => {
    changeLanguage(lang);
    setCurrent(evt.target.dataset.set);
  };

  return (
    <LanguageBtnWrapper position={position}>
      <LanguageButton onClick={evt => onChange('en', evt)}>
        <FlagImg
          src={english}
          alt="english"
          position={position}
          isActive={current === 'en'}
          data-set={'en'}
        />
      </LanguageButton>
      <LanguageButton onClick={evt => onChange('ua', evt)}>
        <FlagImg
          src={ukrainian}
          alt="ukrainian"
          position={position}
          isActive={current === 'ua'}
          data-set="ua"
        />
      </LanguageButton>
      <LanguageButton onClick={evt => onChange('tr', evt)}>
        <FlagImg
          src={turkish}
          alt="turkish"
          position={position}
          isActive={current === 'tr'}
          data-set="tr"
        />
      </LanguageButton>
    </LanguageBtnWrapper>
  );
};

LanguageSwitcher.propTypes = {
  position: PropTypes.string.isRequired,
};

export default LanguageSwitcher;
