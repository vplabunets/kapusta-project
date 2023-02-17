import React from 'react';
import { Link } from 'react-router-dom';

import AuthNav from 'components/AuthNav/AuthNav';

import Logo from 'images/icons-sprite.svg';
import { ContainerHeader } from './Header.styled';

const Header = () => {
  return (
    <ContainerHeader>
      <Link>
        <svg alt="logo" width={90} height={31}>
          <use href={`${Logo}#icon-logo`}></use>
        </svg>
      </Link>
      <AuthNav />
    </ContainerHeader>
  );
};

export default Header;
