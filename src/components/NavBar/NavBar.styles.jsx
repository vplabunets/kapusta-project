import styled from 'styled-components';

import device from 'constants/deviceSize';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MenuBtn = styled.button`
  display: block;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const ExitContainer = styled.div`
  display: none;
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
  }
`;

export const UserName = styled.button`
  margin-right: 40px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  color: rgba(82, 85, 95, 1);
  display: block;
  cursor: pointer;
  border: none;
  background-color: transparent;

  @media ${device.tablet} {
    &::after {
      content: '';

      display: block;

      position: absolute;

      right: 74px;
      top: 10px;

      width: 1px;
      height: 36px;

      background-color: rgba(224, 229, 235, 1);
      @media ${device.laptop} {
        right: 58px;
      }
    }
  }
`;

export const ExitBtn = styled.button`
  cursor: pointer;
  display: block;
  font-size: 12px;
  line-height: 1.17;

  letter-spacing: 0.04em;

  background-color: transparent;
  border: none;
  outline: none;
  text-decoration: underline;
  color: #52555f;
`;

export const LogoutBtn = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 16px;
  height: 16px;

  @media ${device.tablet} {
    display: none;
  }
`;
