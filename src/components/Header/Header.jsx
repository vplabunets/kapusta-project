import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import NavBar from 'components/NavBar/NavBar';
import { CustomizedSwitcher } from 'components/UI/CustomizedSwitcher';

import Logo from 'images/icons-sprite.svg';

import { selectIsLoggedIn } from 'redux/auth/selectors';

import { ContainerHeader } from './Header.styled';

const Header = ({ themeToggler, theme }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <ContainerHeader>
      <Link to="/">
        <svg alt="logo" width={90} height={31}>
          <use href={`${Logo}#icon-logo`}></use>
        </svg>
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
