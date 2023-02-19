import React from 'react';

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

const OperationsForm = () => {
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
    <FormWrapper autoComplete="off">
      <InputWrapper>
        <DateWrapper>
          <DateSelection
            aria-label="Date"
            name="date"
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
          name="description"
          type="text"
          placeholder="Product description"
          // value={description}
        />
        <SelectInput
          aria-label="Select"
          placeholder={'Product category'}
          width="200px"
          // value={category}
          // onChange={}
          options={options}
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
          <CalculatorIcon width={18} height={20}>
            <use href={`${icon}#icon-calculator`}></use>
          </CalculatorIcon>
        </CountWrapper>
      </InputWrapper>
      <ButtonWrapper>
        <Button type="submit" color="accent" design="home">
          Input
        </Button>
        <Button type="button" color="white" design="home">
          Clear
        </Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default OperationsForm;
