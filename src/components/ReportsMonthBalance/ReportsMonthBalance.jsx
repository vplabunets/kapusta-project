import {
  Wrapper,
  Text,
  Sum,
  ExpensesContainer,
  IncomeContainer,
  Line,
} from './ReportsMonthBalance.styled';

const ReportsMonthBalance = () => {
  return (
    <Wrapper>
      <ExpensesContainer>
        <Text>Expenses:</Text>
        <Sum color="negative"> - 18 000.00 UAH.</Sum>
      </ExpensesContainer>
      <Line></Line>
      <IncomeContainer>
        <Text>Income:</Text>
        <Sum color="positive"> + 45 000.00 UAH.</Sum>
      </IncomeContainer>
    </Wrapper>
  );
};
export default ReportsMonthBalance;
