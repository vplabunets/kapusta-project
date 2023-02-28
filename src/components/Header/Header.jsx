import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import NavBar from 'components/NavBar/NavBar';
import { CustomizedSwitcher } from 'components/UI/CustomizedSwitcher';

import Logo from 'images/icons-sprite.svg';

import { selectIsLoggedIn } from 'redux/auth/selectors';

import { ContainerHeader, LogoGroup } from './Header.styled';

const Header = ({ themeToggler, theme }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <ContainerHeader>
      <Link to="/">
        <LogoGroup>
          <svg alt="logo" width={39} height={31}>
            <use href={`${Logo}#icon-logo-rectangles`}></use>
          </svg>
          <svg alt="logo" width={70} height={17}>
            <use href={`${Logo}#icon-logo-main`}></use>
          </svg>
        </LogoGroup>
      </Link>
      <CustomizedSwitcher themeToggler={themeToggler} theme={theme} />
      {isLoggedIn && <NavBar />}
    </ContainerHeader>
  );
};

Header.propTypes = {
  themeToggler: PropTypes.func,
};

export default Header;
