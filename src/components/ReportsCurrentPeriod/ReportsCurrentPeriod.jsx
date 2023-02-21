import React from 'react';
import { useState } from 'react';
import { format, subMonths, addMonths } from 'date-fns';
import {
  Wrapper,
  Title,
  Button,
  ContainerPeriod,
  Text,
} from './ReportsCurrentPeriod.styled';
import LeftIcon from 'images/icons-sprite.svg';
import RightIcon from 'images/icons-sprite.svg';

const CurrentPeriod = () => {
  const [newDate, setNewDate] = useState(() => new Date());
  
   const monthChangeLeft = () => {
    const prevDate = subMonths(newDate, 1);
    setNewDate(prevDate);
   
  };
 const monthChangeRight = () => {
    const nextDate = addMonths(newDate, 1);
    setNewDate(nextDate);
  };

  return (
    <Wrapper>
      <Title>Current period:</Title>
      <ContainerPeriod>
        <Button type="button" onClick={monthChangeLeft}>
          <svg alt="exit" width={16} height={16}>
            <use href={`${LeftIcon}#icon-arrow-left`}></use>
          </svg>
        </Button>
        <Text>
          {format(newDate, 'MMMM yyyy')}
        </Text>
        <Button type="button" onClick={monthChangeRight}>
          <svg alt="exit" width={16} height={16}>
            <use href={`${RightIcon}#icon-arrow-right`}></use>
          </svg>
        </Button>
      </ContainerPeriod>
    </Wrapper>
  );
};

export default CurrentPeriod;
