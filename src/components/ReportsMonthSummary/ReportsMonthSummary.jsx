import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { selectCategoryReports } from 'redux/reports/selectors';
import { selectOperationType } from 'redux/transaction/selectors';

import Icons from 'images/icons-sprite.svg';

import { ReportItem } from 'components/ReportItem/ReportItem';
import { Cabbage } from 'components/UI/Cabbage/Cabbage';
import { Message } from 'components/UI/Message/Message';

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
  const operationType = useSelector(selectOperationType);
  const [isActive, setIsActive] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    if (!categoryItems.length) {
      setArray(categoryItems);
      return;
    }

    const selectedArray = categoryItems.filter(
      item => item.operation === operationType
    );

    if (!selectedArray.length) {
      setArray(selectedArray);
      return;
    }
    if (selectedArray[0].category.length > 0) {
      const sortArray = [...selectedArray[0].category].sort((a, b) =>
        a.sum < b.sum ? 1 : -1
      );
      setArray(sortArray);

      if (!isActive) setIsActive(sortArray[0].category.toLowerCase());
    } else setArray([]);
  }, [operationType, isActive, categoryItems]);

  const expenses = t('Expenses', { returnObjects: true });
  const income = t('Income', { returnObjects: true });

  const reportsTextIncome = t('reportsTextIncome', { returnObjects: true });
  const reportsTextExpenses = t('reportsTextExpenses', { returnObjects: true });

  return (
    <Section>
      <Wrapper>
        <Switcher>
          <BtnArrow
            onClick={() => {
              toggleType();
              setIsActive('');
            }}
          >
            <svg width="10" height="15">
              <use href={`${Icons}#icon-arrow-left`}></use>
            </svg>
          </BtnArrow>
          <Title>{reportType === 'expenses' ? expenses : income}</Title>
          <BtnArrow
            onClick={() => {
              toggleType();
              setIsActive('');
            }}
          >
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
            <Message
              text={
                reportType === 'expenses'
                  ? reportsTextExpenses
                  : reportsTextIncome
              }
            />
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
