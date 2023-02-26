import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { selectCategoryReports } from 'redux/reports/selectors';

import { ReportItem } from 'components/ReportItem/ReportItem';
import { Cabbage } from 'components/UI/Cabbage/Cabbage';
import { Message } from 'components/UI/Message/Message';

import Icons from 'images/icons-sprite.svg';

import {
  Section,
  Wrapper,
  BtnArrow,
  Switcher,
  Title,
  ReportList,
} from './ReportsMonthSummary.styled';

const ReportsMonthSummary = ({ reportType, toggleType }) => {
  const [array, setArray] = useState([]);
  const categoryItems = useSelector(selectCategoryReports);
  const [isActive, setIsActive] = useState('');

  useEffect(() => {
    if (categoryItems.length > 0) {
      const sortArray = [...categoryItems].sort((a, b) =>
        a.sum < b.sum ? 1 : -1
      );
      setArray(sortArray);
      setIsActive(sortArray[0].category.toLowerCase());
    } else setArray([]);
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
        {!array.length ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Message text={`You have no ${reportType} for this period.`} />
            <Cabbage />
          </div>
        ) : (
          <ReportList>
            {array.map(item => (
              <ReportItem
                key={item.category}
                sum={item.sum}
                category={item.category}
                type={reportType.toLowerCase()}
                setIsActive={setIsActive}
                isActive={
                  isActive === item.category.toLowerCase() ? true : false
                }
              />
            ))}
          </ReportList>
        )}
      </Wrapper>
    </Section>
  );
};

ReportsMonthSummary.propTypes = {
  reportType: PropTypes.string.isRequired,
  toggleType: PropTypes.func.isRequired,
};

export default ReportsMonthSummary;
