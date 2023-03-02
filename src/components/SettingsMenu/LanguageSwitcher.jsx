import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

import ukrainian from 'images/flags/ua.png';
import english from 'images/flags/en.png';
import turkish from 'images/flags/tr.png';
import deutsch from 'images/flags/de.png';
import polish from 'images/flags/pl.png';
import swedish from 'images/flags/swe.png';
import bulgarian from 'images/flags/bg.png';
import hebrew from 'images/flags/he.png';

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
  const item = localStorage.getItem('i18nextLng');

  useEffect(() => {
    setCurrent(item);
  }, [item]);

  return (
    <LanguageBtnWrapper position={position}>
      <LanguageButton onClick={() => changeLanguage('ua')}>
        <FlagImg
          src={ukrainian}
          alt="ukrainian"
          position={position}
          isActive={current === 'ua'}
          language="ua"
        />
      </LanguageButton>
      <LanguageButton onClick={() => changeLanguage('pl')}>
        <FlagImg
          src={polish}
          alt="polish"
          position={position}
          isActive={current === 'pl'}
          language="pl"
        />
      </LanguageButton>
      <LanguageButton onClick={() => changeLanguage('en')}>
        <FlagImg
          src={english}
          alt="english"
          position={position}
          isActive={current === 'en'}
          language="en"
        />
      </LanguageButton>
      <LanguageButton onClick={() => changeLanguage('tr')}>
        <FlagImg
          src={turkish}
          alt="turkish"
          position={position}
          isActive={current === 'tr'}
          language="tr"
        />
      </LanguageButton>
      <LanguageButton onClick={() => changeLanguage('de')}>
        <FlagImg
          src={deutsch}
          alt="deutsch"
          position={position}
          isActive={current === 'de'}
          language="de"
        />
      </LanguageButton>
      <LanguageButton onClick={() => changeLanguage('bg')}>
        <FlagImg
          src={bulgarian}
          alt="bulgarian"
          position={position}
          isActive={current === 'bg'}
          language="bg"
        />
      </LanguageButton>
      <LanguageButton onClick={() => changeLanguage('swe')}>
        <FlagImg
          src={swedish}
          alt="swedish"
          position={position}
          isActive={current === 'swe'}
          language="swe"
        />
      </LanguageButton>
      <LanguageButton onClick={() => changeLanguage('he')}>
        <FlagImg
          src={hebrew}
          alt="hebrew"
          position={position}
          isActive={current === 'he'}
          language="he"
        />
      </LanguageButton>
    </LanguageBtnWrapper>
  );
};

LanguageSwitcher.propTypes = {
  position: PropTypes.string.isRequired,
};

export default LanguageSwitcher;
