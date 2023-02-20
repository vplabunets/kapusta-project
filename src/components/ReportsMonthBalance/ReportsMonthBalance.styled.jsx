import styled from 'styled-components';
import device from 'constants/deviceSize';

const Wrapper = styled.div`
  width: 280px;
  height: 85px;
  background: #ffffff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media ${device.tablet} {
    width: 704px;
    height: 50px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
  }
  @media ${device.laptop} {
    width: 1034px;
  }
`;
const Text = styled.p`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  margin-bottom: 4px;
  color: ${p => p.theme.lightTheme.mainTextColor};

  @media ${device.tablet} {
    margin-right: 15px;
    margin-bottom: 0;
  }
`;

const Sum = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.04em;
  color: ${p => {
    switch (p.color) {
      case 'positive':
        return '#407946';
      case 'negative':
        return '#E53935';
      default:
        return '00000';
    }
  }};
`;

const ExpensesContainer = styled.div`
  text-align: center;
  @media ${device.tablet} {
    display: flex;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;
const IncomeContainer = styled.div`
  text-align: center;
  @media ${device.tablet} {
    display: flex;
  }
`;

const Line = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  width: 2px;
  height: 70px;
  background-color: #e0e5eb;

  @media ${device.tablet} {
    margin-left: 20px;
    margin-right: 20px;
    height: 36px;
  }
`;

export { Line, Text, Sum, Wrapper, ExpensesContainer, IncomeContainer };
