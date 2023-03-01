import styled from 'styled-components';

import DEVICE from 'constants/deviceSize';

export const ContainerHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  flex-shrink: 0;

  padding: 12px 20px 13px;

  background-color: ${p => p.theme.headerColor};

  /* It will be delete */
  box-shadow: ${p => p.theme.headerBoxShadow}, 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);

  @media ${DEVICE.tablet} {
    position: static;
    z-index: 0;
    padding: 12px 32px 13px;
  }

  @media ${DEVICE.laptop} {
    padding: 12px 16px 13px;
  }
`;

export const LogoGroup = styled.div`
  position: relative;
  width: 90px;
  height: 31px;

  & > svg:last-child {
    position: absolute;
    left: 20px;
    bottom: 3px;
    fill: ${p => p.theme.tableHeadTextColor};
  }
`;
