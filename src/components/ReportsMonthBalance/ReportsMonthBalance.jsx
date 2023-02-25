import { useSelector } from 'react-redux';
import { selectAllSummaryReports } from 'redux/reports/selectors';
import {
  Wrapper,
  Text,
  Sum,
  ExpensesContainer,
  IncomeContainer,
  Line,
} from './ReportsMonthBalance.styled';

const ReportsMonthBalance = () => {
  const summaryReports = useSelector(selectAllSummaryReports);

  return (
    <Wrapper>
      {summaryReports.map((item, index) => {
        if (item.operation === 'expenses') {
          return (
            <ExpensesContainer key={index}>
              <Text>Expenses:</Text>
              <Sum color="negative">
                - {item.sum === 0 ? '00' : item.sum}.00 UAH.
              </Sum>
            </ExpensesContainer>
          );
        }
        return null;
      })}

      <Line></Line>

      {summaryReports.map((item, index) => {
        if (item.operation === 'income') {
          return (
            <IncomeContainer key={index}>
              <Text>Income:</Text>
              <Sum color="positive">
                + {item.sum === 0 ? '00' : item.sum}.00 UAH.
              </Sum>
            </IncomeContainer>
          );
        }
        return null;
      })}
    </Wrapper>
  );
};
export default ReportsMonthBalance;
