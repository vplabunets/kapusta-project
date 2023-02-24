import styled from 'styled-components';

export const Backdrop = styled.div`
  z-index: 8;
  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
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
    padding: 50px 40px 50px;
  }
`;

export const Text = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.19;

  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-align: center;
  color: #52555f;
  margin-bottom: 20px;
`;

export const SubText = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  color: #52555f;

  margin-bottom: 20px;
`;
