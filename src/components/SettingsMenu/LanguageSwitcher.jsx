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

const LanguageSwitcher = ({ position, onClose }) => {
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
      <LanguageButton
        onClick={() => {
          changeLanguage('ua');
          if (position === 'menu') {
            onClose();
            return;
          }
        }}
      >
        <FlagImg
          src={ukrainian}
          alt="ukrainian"
          position={position}
          isActive={current === 'ua'}
          language="ua"
        />
      </LanguageButton>
      <LanguageButton
        onClick={() => {
          changeLanguage('pl');
          if (position === 'menu') {
            onClose();
            return;
          }
        }}
      >
        <FlagImg
          src={polish}
          alt="polish"
          position={position}
          isActive={current === 'pl'}
          language="pl"
        />
      </LanguageButton>
      <LanguageButton
        onClick={() => {
          changeLanguage('en');
          if (position === 'menu') {
            onClose();
            return;
          }
        }}
      >
        <FlagImg
          src={english}
          alt="english"
          position={position}
          isActive={current === 'en'}
          language="en"
        />
      </LanguageButton>
      <LanguageButton
        onClick={() => {
          changeLanguage('tr');
          if (position === 'menu') {
            onClose();
            return;
          }
        }}
      >
        <FlagImg
          src={turkish}
          alt="turkish"
          position={position}
          isActive={current === 'tr'}
          language="tr"
        />
      </LanguageButton>
      <LanguageButton
        onClick={() => {
          changeLanguage('de');
          if (position === 'menu') {
            onClose();
            return;
          }
        }}
      >
        <FlagImg
          src={deutsch}
          alt="deutsch"
          position={position}
          isActive={current === 'de'}
          language="de"
        />
      </LanguageButton>
      <LanguageButton
        onClick={() => {
          changeLanguage('bg');
          if (position === 'menu') {
            onClose();
            return;
          }
        }}
      >
        <FlagImg
          src={bulgarian}
          alt="bulgarian"
          position={position}
          isActive={current === 'bg'}
          language="bg"
        />
      </LanguageButton>
      <LanguageButton
        onClick={() => {
          changeLanguage('swe');
          if (position === 'menu') {
            onClose();
            return;
          }
        }}
      >
        <FlagImg
          src={swedish}
          alt="swedish"
          position={position}
          isActive={current === 'swe'}
          language="swe"
        />
      </LanguageButton>
      <LanguageButton
        onClick={() => {
          changeLanguage('he');
          if (position === 'menu') {
            onClose();
            return;
          }
        }}
      >
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
