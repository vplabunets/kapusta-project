import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTranslation } from 'react-i18next';
import changeMonth from 'helpers/changeMonth';
import moment from 'moment';

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
        month: moment(newDate).format('MMMM'),
        year: moment(newDate).format('yyyy'),
      })
    );
  }, [dispatch, newDate]);

  const monthChangeLeft = () => {
    const prevDate = moment(newDate).subtract(1, 'months');
    setNewDate(prevDate);
  };
  const monthChangeRight = () => {
    const nextDate = moment(newDate).add(1, 'months');
    setNewDate(nextDate);
  };

  const year = moment(newDate).format('YYYY');
  const month = moment(newDate).format('MMMM');

  return (
    <div>
      <Title>{t('Current period')}:</Title>
      <ContainerPeriod>
        <Button type="button" onClick={monthChangeLeft}>
          <svg alt="exit" width={16} height={16}>
            <use href={`${icons}#icon-arrow-left`}></use>
          </svg>
        </Button>
        <Text>{`${t(changeMonth(month))} ${year}`}</Text>
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
