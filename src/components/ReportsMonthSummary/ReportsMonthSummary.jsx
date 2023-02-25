import Icons from 'images/icons-sprite.svg';

import { ReportItem } from 'components/ReportItem/ReportItem';
import { useEffect, useState } from 'react';

import {
  Section,
  Wrapper,
  BtnArrow,
  Switcher,
  Title,
  ReportList,
} from './ReportsMonthSummary.styled';
import { useSelector } from 'react-redux';
import { selectCategoryReports } from 'redux/reports/selectors';

const ReportsMonthSummary = ({ reportType, toggleType }) => {
  const [items, setItem] = useState([]);
  const categoryItems = useSelector(selectCategoryReports);

  useEffect(() => {
    if (categoryItems.length > 0) {
      console.log(categoryItems);
      setItem(categoryItems);
    }
  }, [categoryItems]);

  return (
    <Section>
      <Wrapper>
        <Switcher>
          <BtnArrow onClick={() => toggleType()}>
            <svg width="10" height="15">
              <use href={`${Icons}#icon-arrow-left`}></use>
            </svg>
          </BtnArrow>
          <Title>{reportType}</Title>
          <BtnArrow onClick={() => toggleType()}>
            <svg width="10" height="15">
              <use href={`${Icons}#icon-arrow-right`}></use>
            </svg>
          </BtnArrow>
        </Switcher>
        <ReportList>
          {items.map(item => (
            <ReportItem
              key={item.category}
              sum={item.sum}
              icon={item.category.toLowerCase()}
              category={item.category}
              type={reportType.toLowerCase()}
              btn={item.category.toLowerCase()}
            />
          ))}
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
