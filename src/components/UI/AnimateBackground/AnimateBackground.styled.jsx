import styled from 'styled-components';

import device from 'constants/deviceSize';

export const BackgroundGrey = styled.div`
  z-index: -1;
  width: 100%;
  height: 342px;

  position: absolute;
  top: 0;
  background-color: #f5f6fb;
  border-bottom-left-radius: 20%;

  overflow: hidden;

  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

  @media ${device.tablet} {
    height: 582px;
  }
  @media ${device.laptop} {
    height: 582.5px;
  }
`;

export const BackgroundWhite = styled.div`
  display: none;

  @media ${device.laptop} {
    display: block;
    z-index: -1;
    width: 100%;
    height: 100%;

    position: absolute;
    bottom: 0;

    overflow: hidden;
  }
`;
