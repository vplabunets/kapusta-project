import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import icon from 'images/icons-sprite.svg';
import {
  ButtonWrapper,
  CalculatorIcon,
  CalendarIcon,
  CountInput,
  CountWrapper,
  DateSelection,
  DateWrapper,
  DescriptionInput,
  FormWrapper,
  InputWrapper,
  SelectInput,
} from './OperationsForm.styled';
import { Button } from 'components/UI/Button/Button';
import { customStyles } from './SelectorCustomStyle';

const OperationsForm = () => {
  const isScreenMoreTablet = useMediaQuery('(min-width: 768px)');

  const options = [
    { value: 'Products', label: 'Products' },
    { value: 'Health', label: 'Health' },
    { value: 'Alcohol', label: 'Alcohol' },
    { value: 'Entertainment', label: 'Entertainment' },
    { value: 'Housing', label: 'Housing' },
    { value: 'Communal, communication', label: 'Communal, communication' },
    { value: 'Sports, hobbies', label: 'Sports, hobbies' },
    { value: 'Education', label: 'Education' },
    { value: 'Other', label: 'Other' },
  ];
  return (
    <>
      <FormWrapper autoComplete="off">
        <InputWrapper>
          <DateWrapper>
            <DateSelection
              aria-label="Date"
              name="date"
              dateFormat="dd.MM.yyyy"
              // onChange={}
              type="date"
              // value={date}
            />
            <CalendarIcon width={20} height={17}>
              <use href={`${icon}#icon-calendar`}></use>
            </CalendarIcon>
          </DateWrapper>
          <DescriptionInput
            aria-label="Text"
            // onChange={}
            type="date"
            // value={date}
          />
          <SelectInput
            aria-label="Select"
            placeholder={'Product category'}
            width="200px"
            styles={customStyles}
            // value={category}
            // onChange={}
            options={options}
            theme={theme => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: '#F5F6FB',
                primary: '#FF751D',
              },
            })}
          />
          <CountWrapper>
            <CountInput
              aria-label="Number"
              // onChange={}
              type="number"
              name="amount"
              placeholder="00.00"
              // value={amount}
            />
            <CalculatorIcon
              width={isScreenMoreTablet ? 20 : 40}
              height={isScreenMoreTablet ? 20 : 35}
            >
              <use href={`${icon}#icon-calculator`}></use>
            </CalculatorIcon>
          </CountWrapper>
        </InputWrapper>
        <ButtonWrapper>
          <Button
            type="submit"
            color="accent"
            design={!isScreenMoreTablet ? 'home' : 'operation'}
          >
            Input
          </Button>
          <Button
            type="button"
            color="white"
            design={!isScreenMoreTablet ? 'home' : 'operation'}
          >
            Clear
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </>
  );
};

export default OperationsForm;
