import React from 'react';
import { useState,  } from 'react';
import moment from "moment";
import { Wrapper, Title, Button, ContainerPeriod, Text } from "./ReportsCurrentPeriod.styled";
import  LeftIcon from 'images/icons-sprite.svg';
import  RightIcon from 'images/icons-sprite.svg';


 const CurrentPeriod = () => {
   
      const newDate = moment(new Date());
    const [dateMonth, setDateMonth] = useState(moment(new Date()).format('MM'));
    const [dateYears, setDateYears] = useState(moment(new Date()).format('YYYY'));

     let monthChangeLeft = () => {
        setDateMonth(newDate.add(-1, 'month').format('MM'));
        if (dateMonth === '01') {
            setDateYears(newDate.add('year').format('YYYY'));
        }
    };

    let monthChangeRight = () => {
        setDateMonth(newDate.add(1, 'month').format('MM'));
        if (dateMonth === '12') {
            setDateYears(newDate.add('year').format('YYYY'));
        }
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
           {moment(dateMonth).format("MMMM")}  {dateYears}
         </Text>
         <Button type="button" onClick={monthChangeRight}>
           <svg alt="exit" width={16} height={16}>
          <use href={`${RightIcon}#icon-arrow-right`}></use>
        </svg>  
        </Button>
     </ContainerPeriod>  
        </Wrapper>
    );
}



export default CurrentPeriod;