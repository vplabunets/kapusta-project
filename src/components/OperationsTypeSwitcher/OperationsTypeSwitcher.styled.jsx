import styled from 'styled-components';
import device from 'constants/deviceSize';
export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-self: flex-end;
  justify-content: center;
  width: 100%;
  @media ${device.tablet} {
    position: static;
    display: flex;
    margin-top: 60px;
    align-self: flex-start;
    width: 276px;
  }

  @media ${device.laptop} {
  }
`;
export const TypeButton = styled.button`
  display: flex;
  height: 53px;
  width: 100%;
  font-size: 12px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  &:first-child {
    margin-right: 2px;
  }

  @media ${device.tablet} {
    width: 138px;
    height: 40px;
    border: none;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  @media ${device.laptop} {
    position: static;
  }
`;
