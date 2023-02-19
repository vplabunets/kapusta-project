import Icons from 'images/icons-sprite.svg';

import { ReportItem } from 'components/ReportItem/ReportItem';

import {
  Section,
  Wrapper,
  BtnArrow,
  Switcher,
  Title,
  ReportList,
} from './ReportsMonthSummary.styled';

const ReportsMonthSummary = ({ reportType = 'Incomes' }) => {
  return (
    <Section>
      <Wrapper>
        <Switcher>
          <BtnArrow>
            <svg width="10" height="15">
              <use href={`${Icons}#icon-arrow-left`}></use>
            </svg>
          </BtnArrow>
          <Title>{reportType}</Title>
          <BtnArrow>
            <svg width="10" height="15">
              <use href={`${Icons}#icon-arrow-right`}></use>
            </svg>
          </BtnArrow>
        </Switcher>
        <ReportList>
          <ReportItem sum={45000.0} icon={'salary'} type={'salary'} />
          <ReportItem sum={1500.0} icon={'add'} type={'add.income'} />
        </ReportList>
      </Wrapper>
    </Section>
  );
};

// const ReportIcons = {
//   incomes: {
//     salary: `${Icons}#icon-income-salary`,
//     additional: `${Icons}#icon-income-add`,
//   },
//   expenses: {
//     products: `${Icons}#icon-expenses-products`,
//     alcohol: `${Icons}#icon-expenses-alcohol`,
//     entertainment: `${Icons}#icon-expenses-entertainment`,
//     health: `${Icons}#icon-expenses-health`,
//     transport: `${Icons}#icon-expenses-transport`,
//     housing: `${Icons}#icon-expenses-housing`,
//     technique: `${Icons}#icon-expenses-technique`,
//     communal: `${Icons}#icon-expenses-communal`,
//     sports: `${Icons}#icon-expenses-sports`,
//     education: `${Icons}#icon-expenses-education`,
//     other: `${Icons}#icon-expenses-other`,
//   },
// };

export default ReportsMonthSummary;
