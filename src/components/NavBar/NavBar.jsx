import { useState } from "react";
import { Avatar } from '@mui/material';
import ConfirmModal from 'components/ConfirmModal/ConfirmModal';

import ExitIcon from 'images/icons-sprite.svg';

import {
  Container,
  ExitBtn,
  UserName,
  ExitContainer,
  LogoutBtn,
} from './NavBar.styles';



const NavBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  

  return (
    <>
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
          <ExitBtn onClick={() => setModalOpen(true)}>Exit</ExitBtn>
        </ExitContainer>
        <LogoutBtn onClick={() => setModalOpen(true)}>
          <svg alt="exit" width={16} height={16}>
            <use href={`${ExitIcon}#icon-logout`}></use>
          </svg>
        </LogoutBtn>
      </Container>
      {modalOpen && <ConfirmModal setModalOpen={setModalOpen} text={'Do you really want to leave?' } /> }  
      </>
  );
};

export default NavBar;
