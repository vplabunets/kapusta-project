import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import NavBar from 'components/NavBar/NavBar';

import Logo from 'images/icons-sprite.svg';
import { ContainerHeader } from './Header.styled';
import { CustomizedSwitcher } from 'components/UI/CustomizedSwitcher';

const Header = ({ themeToggler }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <ContainerHeader>
      <Link to="/">
        <svg alt="logo" width={90} height={31}>
          <use href={`${Logo}#icon-logo`}></use>
        </svg>
      </Link>
      <CustomizedSwitcher themeToggler={themeToggler} />
      {isLoggedIn && <NavBar />}
    </ContainerHeader>
  );
};

export default Header;
