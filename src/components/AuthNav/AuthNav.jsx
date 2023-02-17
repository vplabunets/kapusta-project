import { Avatar } from '@mui/material';

import ExitIcon from 'images/icons-sprite.svg';

import {
  Container,
  ExitBtn,
  UserName,
  ExitContainer,
  LogoutBtn,
} from './AuthNav.styles';

const AuthNav = () => {
  return (
    <Container>
      <Avatar
        sx={{
          width: 32,
          height: 32,
          color: 'rgba(82, 85, 95, 1)',
          backgroundColor: 'rgba(245, 246, 250, 1)',
          fontWeight: 700,
          fontSize: '12px',
          lineHeight: 1.17,
        }}
      >
        U
      </Avatar>
      <ExitContainer>
        <UserName>User Name</UserName>
        <ExitBtn>Exit</ExitBtn>
      </ExitContainer>
      <LogoutBtn>
        <svg alt="exit" width={16} height={16}>
          <use href={`${ExitIcon}#icon-logout`}></use>
        </svg>
      </LogoutBtn>
    </Container>
  );
};

export default AuthNav;
