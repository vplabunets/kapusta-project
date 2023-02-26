import styled from 'styled-components';
import DEVICE from 'constants/deviceSize';

const Wrapper = styled.div`
  height: 85px;
  background: ${p => p.theme.lightTheme.headerColor};
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 32px;

  @media ${DEVICE.tablet} {
    height: 50px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
  }
`;
const Text = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  margin-bottom: 4px;
  color: ${p => p.theme.lightTheme.mainTextColor};

  @media ${DEVICE.tablet} {
    margin-right: 15px;
    margin-bottom: 0;
  }
`;

const Sum = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.04em;
  color: ${p => {
    switch (p.color) {
      case 'positive':
        return `${p.theme.lightTheme.incomesTextColor}`;
      case 'negative':
        return '#E53935';
      default:
        return `${p.theme.lightTheme.tableHeadTextColor}`;
    }
  }};
`;

const ExpensesContainer = styled.div`
  width: 100%;
  text-align: center;

  @media ${DEVICE.tablet} {
    justify-content: right;
    display: flex;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;
const IncomeContainer = styled.div`
  width: 100%;
  text-align: center;
  @media ${DEVICE.tablet} {
    display: flex;
  }
`;

const Line = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  width: 2px;
  height: 70px;
  background-color: #e0e5eb;

  @media ${DEVICE.tablet} {
    margin-left: 20px;
    margin-right: 20px;
    height: 36px;
  }
`;

export { Line, Text, Sum, Wrapper, ExpensesContainer, IncomeContainer };
