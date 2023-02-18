import styled from 'styled-components';

import device from 'constants/deviceSize';

export const BackgroundGrey = styled.div`
  z-index: -2;
  width: 100%;
  height: 352px;

  position: absolute;
  top: 0;
  background-color: #f5f6fb;
  border-bottom-left-radius: 20%;

  overflow: hidden;

  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

  @media ${device.tablet} {
    height: 583px;
  }
`;

export const DesignWrapper = styled.div`
  display: none;
  overflow: hidden;

  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -3;
  @media ${device.laptop} {
    display: block;
  }
  & > img {
    @media ${device.laptop} {
      display: block;
      width: 100vw;
      height: 232px;
    }
  }
`;

export const CabbageContainer = styled.div`
  display: none;

  @media ${device.tablet} {
    position: absolute;
    right: 88px;
    bottom: 58px;

    z-index: -1;
    display: flex;
  }

  @media ${device.laptop} {
    display: none;
  }
`;
