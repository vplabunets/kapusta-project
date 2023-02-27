import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTranslation } from 'react-i18next';
import { format, subMonths, addMonths } from 'date-fns';
import changeMonth from 'helpers/changeMonth';

import { setCurrentPeriod } from 'redux/reports/slice';

import icons from 'images/icons-sprite.svg';

import {
  Title,
  Button,
  ContainerPeriod,
  Text,
} from './ReportsCurrentPeriod.styled';

const CurrentPeriod = () => {
  const [newDate, setNewDate] = useState(() => new Date());
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setCurrentPeriod({
        month: format(newDate, 'MMMM'),
        year: format(newDate, 'yyyy'),
      })
    );
  }, [dispatch, newDate]);

  const monthChangeLeft = () => {
    const prevDate = subMonths(newDate, 1);
    setNewDate(prevDate);
  };
  const monthChangeRight = () => {
    const nextDate = addMonths(newDate, 1);
    setNewDate(nextDate);
  };

  const year = format(newDate, ' yyyy');
  const month = format(newDate, 'MMMM');

  return (
    <div>
      <Title>{t('Current period')}:</Title>
      <ContainerPeriod>
        <Button type="button" onClick={monthChangeLeft}>
          <svg alt="exit" width={16} height={16}>
            <use href={`${icons}#icon-arrow-left`}></use>
          </svg>
        </Button>
        <Text>{`${t(changeMonth(month))}${year}`}</Text>
        <Button type="button" onClick={monthChangeRight}>
          <svg alt="exit" width={16} height={16}>
            <use href={`${icons}#icon-arrow-right`}></use>
          </svg>
        </Button>
      </ContainerPeriod>
    </div>
  );
};

export default CurrentPeriod;
