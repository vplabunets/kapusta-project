import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Modal = styled.div`
  position: relative;
  width: 280px;

  background-color: #ffffff;
  border-radius: 30px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 40px 40px 50px;

  @media screen and (min-width: 420px) {
    width: 380px;
    padding: 50px 58px 60px;
  }
`;

export const ButtonClose = styled.button`
  cursor: pointer;

  position: absolute;
  top: 20px;
  right: 20px;

  background-color: transparent;
  border: none;

  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  & svg {
    width: 12px;
    height: 12px;
  }

  &:focus,
  &:hover {
    transform: scale(0.9);
  }
`;

export const Text = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;

  color: #52555f;

  margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
