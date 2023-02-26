import styled from 'styled-components';
import DEVICE from '../../constants/deviceSize';

export const Tabletr = styled.tr`
  position: relative;
  height: 40px;
  font-family: inherit;
  font-size: 8px;
  line-height: 1.16;
  color: ${p => p.theme.mainTextColor};

  border-bottom: 2px solid ${p => p.theme.tableBodyColor};
  display: flex;

  @media ${DEVICE.tablet} {
    font-size: 12px;
    width: calc(100% - 2px);

    display: table;
    width: calc(100% - 2px);
    height: 40px;
    text-align: center;
    border-left: 2px solid ${p => p.theme.tableBodyColor};
  }

  @media ${DEVICE.laptop} {
    height: 38px;
  }
`;

export const Data = styled.td`
  position: absolute;
  top: 55%;
  width: 20%;

  @media ${DEVICE.tablet} {
    width: 14%;
    top: 28%;
    padding-left: 12px;
    text-align: left;
  }

  @media ${DEVICE.laptop} {
    width: 12%;
  }
`;

export const Description = styled.td`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  position: absolute;
  max-width: 50%;
  top: 12%;
  left: 0;
  font-size: 12px;
  font-weight: 700;

  @media ${DEVICE.tablet} {
    top: 28%;
    left: 19%;
    width: 30%;
    text-align: left;
  }

  @media ${DEVICE.laptop} {
    left: 16%;
    width: 32%;
  }
`;

export const Category = styled.td`
  position: absolute;
  top: 55%;
  left: 23%;
  width: 25%;

  @media ${DEVICE.tablet} {
    width: 18%;
    top: 28%;
    left: 54%;
    text-align: left;
  }

  @media ${DEVICE.laptop} {
    left: 52%;
    width: 23%;
  }
`;

export const Sum = styled.td`
  font-size: 12px;
  font-weight: 700;

  position: absolute;
  top: 25%;
  left: 55%;
  text-align: center;
  width: 30%;

  @media ${DEVICE.tablet} {
    top: 28%;
    left: 72%;
    width: 20%;
  }

  @media ${DEVICE.laptop} {
    width: 15%;
    left: 75%;
  }
`;

export const Btn = styled.td`
  position: absolute;
  top: 20%;
  right: 0;
  text-align: center;

  @media ${DEVICE.tablet} {
    top: 12%;
    left: 92%;
    width: 5%;
  }

  @media ${DEVICE.laptop} {
    top: 12%;
    left: 92%;
    width: 5%;
  }
`;

export const BtnStyle = styled.button`
  padding: none;
  background-color: transparent;
  cursor: pointer;
  border: none;

  @media ${DEVICE.tablet} {
    width: 32px;
    height: 32px;

    :hover {
      background-color: ${p => p.theme.tableHeadBackgroundColor};
      cursor: pointer;
      border-radius: 50%;
    }
  }
`;

export const Delete = styled.svg`
  z-index: 2;
  cursor: pointer;
  stroke: ${p => p.theme.mainTextColor};
`;
