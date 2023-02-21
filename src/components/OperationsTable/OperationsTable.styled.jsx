import styled from 'styled-components';
import device from '../../constants/deviceSize';

export const Table = styled.table`
  width: 100%;
  max-height: 500px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  overflow-y: scroll;

  @media ${device.tablet} {
    width: 100%;
    margin: 48px 0 0 0;
  }

  @media ${device.laptop} {
    margin-top: 60px;
  }
`;

export const TableHead = styled.thead`
  @media ${device.tablet} {
    display: table;
    width: 100%;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    align-items: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #000000;
    background-color: #f5f6fb;
    border-radius: 20px 20px 0 0;
  }

  @media ${device.laptop} {
    width: 100%;
  }
`;

export const TableHeadTitle = styled.th`
  display: none;

  @media ${device.tablet} {
    display: table-cell;
    align-items: center;
    text-align: center;
    font-weight: bold;
    height: 40px;
    padding: 5px;
    width: 15%;

    :first-child {
      width: 18%;
      padding-left: 15px;
      text-align: left;
    }

    :last-child {
      width: 20%;
      text-align: left;
    }

    :nth-child(2) {
      width: 35%;
      text-align: left;
    }

    :nth-child(3) {
      width: 25%;
      text-align: left;
    }
  }

  @media ${device.laptop} {
    :first-child {
      width: 12%;
    }

    :last-child {
      width: 5%;
    }

    :nth-child(2) {
      width: 30%;
      text-align: left;
    }

    :nth-child(3) {
      width: 20%;
      text-align: left;
    }
  }
`;

export const TableBody = styled.tbody`
  @media ${device.tablet} {
    display: inline-block;
    width: 100%;
    overflow-y: scroll;
    height: calc(18px * 9 + 1px * 9);

    ::-webkit-scrollbar {
      width: 6px;
      background-color: #f2f8f8;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background-color: #ff751d;
    }
  }

  @media ${device.laptop} {
    height: calc(17px * 9 + 1px * 9);
  }
`;
