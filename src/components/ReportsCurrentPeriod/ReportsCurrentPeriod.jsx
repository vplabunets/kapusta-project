import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { format, subMonths, addMonths } from 'date-fns';
import {
  Title,
  Button,
  ContainerPeriod,
  Text,
} from './ReportsCurrentPeriod.styled';
import LeftIcon from 'images/icons-sprite.svg';
import RightIcon from 'images/icons-sprite.svg';
import { setCurrentPeriod } from 'redux/reports/slice';
import { useTranslation } from 'react-i18next';
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

  return (
    <div>
      <Title>{t('Current period')}:</Title>
      <ContainerPeriod>
        <Button type="button" onClick={monthChangeLeft}>
          <svg alt="exit" width={16} height={16}>
            <use href={`${LeftIcon}#icon-arrow-left`}></use>
          </svg>
        </Button>
        <Text>{format(newDate, 'MMMM yyyy')}</Text>
        <Button type="button" onClick={monthChangeRight}>
          <svg alt="exit" width={16} height={16}>
            <use href={`${RightIcon}#icon-arrow-right`}></use>
          </svg>
        </Button>
      </ContainerPeriod>
    </div>
  );
};

export default CurrentPeriod;
