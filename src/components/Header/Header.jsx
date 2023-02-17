import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import NavBar from 'components/NavBar/NavBar';

import Logo from 'images/icons-sprite.svg';
import { ContainerHeader } from './Header.styled';
import { CustomizedSwitcher } from 'components/UI/CustomizedSwitcher';

const Header = () => {
  // In future will be connected with Redux
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  //

  return (
    <ContainerHeader>
      <Link>
        <svg alt="logo" width={90} height={31}>
          <use href={`${Logo}#icon-logo`}></use>
        </svg>
      </Link>
      <CustomizedSwitcher />
      {isLoggedIn && <NavBar />}
    </ContainerHeader>
  );
};

export default Header;
