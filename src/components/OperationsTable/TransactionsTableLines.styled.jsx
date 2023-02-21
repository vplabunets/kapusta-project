import styled from 'styled-components';
import device from '../../constants/deviceSize';

export const Tabletr = styled.tr`
  position: relative;
  height: 40px;
  font-family: Roboto, sans-serif;
  font-size: 8px;
  line-height: 1.16;
  color: #52555f;

  border-bottom: 2px solid #f2f8f8;
  display: flex;

  @media ${device.tablet} {
    font-size: 12px;
    width: calc(100% - 2px);

    display: table;
    width: calc(100% - 2px);
    height: 40px;
    text-align: center;
    border-left: 2px solid #f2f8f8;
  }

  @media ${device.laptop} {
    height: 38px;
  }
`;

export const Data = styled.td`
  position: absolute;
  top: 55%;
  width: 20%;

  @media ${device.tablet} {
    width: 14%;
    top: 28%;
    padding-left: 12px;
    text-align: left;
  }

  @media ${device.laptop} {
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

  @media ${device.tablet} {
    top: 28%;
    left: 19%;
    width: 30%;
    text-align: left;
  }

  @media ${device.laptop} {
    left: 16%;
    width: 32%;
  }
`;

export const Category = styled.td`
  position: absolute;
  top: 55%;
  left: 23%;
  width: 25%;

  @media ${device.tablet} {
    width: 18%;
    top: 28%;
    left: 54%;
    text-align: left;
  }

  @media ${device.laptop} {
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

  @media ${device.tablet} {
    top: 28%;
    left: 72%;
    width: 20%;
  }

  @media ${device.laptop} {
    width: 15%;
    left: 75%;
  }
`;

export const Btn = styled.td`
  position: absolute;
  top: 20%;
  right: 0;
  text-align: center;

  @media ${device.tablet} {
    top: 12%;
    left: 92%;
    width: 5%;
  }

  @media ${device.laptop} {
    top: 12%;
    left: 92%;
    width: 5%;
  }
`;

export const BtnStyle = styled.button`
  padding: none;
  background-color: #fff;
  cursor: pointer;
  border: none;

  @media ${device.tablet} {
    width: 32px;
    height: 32px;

    :hover {
      background-color: #f5f6fb;
      cursor: pointer;
      border-radius: 50%;
    }
  }

  @media ${device.laptop} {
    width: 20%;
  }
`;

export const Delete = styled.svg`
  z-index: 2;
  cursor: pointer;
`;
