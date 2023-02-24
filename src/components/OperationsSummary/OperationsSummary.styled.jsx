import styled from 'styled-components';
import DEVICE from 'constants/deviceSize';

const Wrapper = styled.div`
  display: none;
  width: 230px;
  height: 280px;
  background-color: ${p => p.theme.lightTheme.tableHeadBackgroundColor};
  border-radius: 20px 20px 20px 0;

  @media ${DEVICE.tablet} {
    display: flex;
    justify-content: center;
  }
  @media ${DEVICE.laptop} {
    min-width: 213px;
    margin-top: 60px;
    margin-left: 75px;
    align-self: right;
    justify-self: right;
  }
`;
const Title = styled.caption`
  font-family: 'Roboto';
  padding-top: 12px;
  color: ${p => p.theme.lightTheme.tableHeadTextColor};
  padding-bottom: 12px;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

const Table = styled.table`
  width: 100%;
  height: 100%;
  &:first-of-type {
    border-top: 4px solid white;
  }
  border-collapse: collapse;
`;

const Body = styled.tbody`
  display: flex;
  height: 238px;
  overflow: auto;
  flex-direction: column;
  ::-webkit-scrollbar {
    width: 4px;
    background-color: #f2f8f8;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #ff751d;
  }
`;

const Row = styled.tr`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    border-bottom: 2px solid white;
  }
`;
const Cell = styled.td`
  padding: 12px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  color: ${p => p.theme.lightTheme.mainTextColor};
  text-transform: uppercase;
`;

export { Wrapper, Table, Row, Cell, Title, Body };
