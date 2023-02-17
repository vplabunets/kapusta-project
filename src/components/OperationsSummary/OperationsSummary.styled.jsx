import styled from 'styled-components';

const Wrapper = styled.div`
  width: 213px;
  height: 280px;
  background-color: ${p => p.theme.lightTheme.tableHeadBackgroundColor};
  border-radius: 20px 20px 20px 0;
  display: flex;
  justify-content: center;
`;
const Title = styled.caption`
  font-family: 'Roboto';
  padding-top: 12px;
  color: ${p => p.theme.lightTheme.tableHeadTextColor};
  padding-bottom: 12px;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  text-transform: uppercase;
`;

const Table = styled.table`
  width: 100%;
  &:first-of-type {
    border-top: 4px solid white;
  }
  border-collapse: collapse;
`;

const Body = styled.tbody`
  display: flex;
  flex-direction: column;
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
  color: ${p => p.theme.lightTheme.mainTextColor};
  text-transform: uppercase;
`;

export { Wrapper, Table, Row, Cell, Title, Body };
