import styled from 'styled-components';
import device from '../../constants/deviceSize';

export const Table = styled.table`
  @media ${device.mobile} {
    width: 100%;

    max-height: 500px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    overflow-y: scroll;
  }

  @media ${device.tablet} {
    /* max-width: 624px; */
    margin-top: 48px;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  @media ${device.laptop} {
    /* width: 746px; */
    margin-top: 60px;
    /* grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2; */
  }
`;

export const TableHead = styled.thead`
  @media ${device.tablet} {
    display: table;
    width: 100%;
    /* max-width: 624px; */
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
    /* max-width: 746px; */
  }
`;

export const TableHeadTitle = styled.th`
  @media screen and (max-width: 768px) {
    display: none;
  }

  @media ${device.tablet} {
    align-items: center;
    width: 25%;
    font-weight: bold;
    height: 40px;
    padding: 5px;

    :first-child {
      padding-left: 15px;
      text-align: left;
    }

    :nth-child(2) {
      text-align: left;
    }
  }

  @media ${device.laptop} {
    width: 20%;

    :first-child {
      width: 18%;
    }
    :last-child {
      width: 1%;
    }
    :nth-child(2) {
      width: 22%;
    }
  }
`;

export const TableBody = styled.tbody`
  @media ${device.mobile} {
    display: inline-block;
    /* width: 280px; */
  }

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
    /* width: 746px; */
  }
`;
