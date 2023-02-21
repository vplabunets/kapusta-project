import styled from 'styled-components';
import device from '../../constants/deviceSize';

export const Tabletr = styled.tr`
  position: relative;
  height: 40px;
  font-family: 'Roboto', sans-serif;
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
  display: flex;
  align-items: center;
  position: absolute;
  top: 55%;
  width: 23%;

  @media ${device.tablet} {
    width: 25%;
    top: 28%;
    padding-left: 15px;
    text-align: left;
  }

  @media ${device.laptop} {
    width: 20%;
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
    left: 25%;
    width: 27%;
    text-align: left;
  }

  @media ${device.laptop} {
    left: 20%;
    width: 20%;
  }
`;

export const Category = styled.td`
  position: absolute;
  top: 55%;
  left: 23%;
  width: 30%;

  @media ${device.tablet} {
    width: 25%;
    top: 28%;
    left: 48%;
  }

  @media ${device.laptop} {
    left: 42%;
    width: 20%;
  }
`;

export const Sum = styled.td`
  font-size: 12px;
  font-weight: 700;
  position: absolute;
  top: 25%;
  left: 50%;
  text-align: right;
  width: 25%;

  @media ${device.tablet} {
    top: 28%;
    left: 58%;
    width: 25%;
  }

  @media ${device.laptop} {
    width: 20%;
    left: 50%;
  }
`;

export const Btn = styled.td`
  text-align: center;

  @media ${device.tablet} {
    width: 25%;
  }

  @media ${device.laptop} {
    width: 20%;
  }
`;
