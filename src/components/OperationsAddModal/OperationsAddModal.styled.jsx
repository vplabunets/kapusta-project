import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 56px;

  width: 100vw;
  height: 100vh;
  background-color: white;
`;

export const Modal = styled.div`
  padding: 20px 22px 0;
`;

export const Background = styled.div`
  z-index: -1;
  width: 100%;
  height: 342px;

  position: absolute;
  top: 0;
  background-color: #f5f6fb;
  border-bottom-left-radius: 20%;

  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const BackBtn = styled.button`
  display: block;

  background-color: transparent;

  border: none;
  width: 24px;
  height: 24px;
  margin-bottom: 16px;
`;
