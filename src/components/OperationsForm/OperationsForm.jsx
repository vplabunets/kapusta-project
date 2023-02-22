import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import moment from 'moment';

import productCategory from '../../constants/productCategory';

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

  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    if (description.trim().length === 0 || !category || !amount) {
      return alert('missed one of the fields');
    }
    const userEnteredData = {
      description: description,
      date: date,
      category: category.value,
      amount: amount,
    };
    console.log('userEnteredData=', userEnteredData);
    resetForm();
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'date':
        setDate(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'amount':
        setAmount(Number(value));
        break;

      default:
        break;
    }
  };

  const resetForm = () => {
    setDate(moment(new Date()).format('YYYY-MM-DD'));
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <FormWrapper autoComplete="off" onSubmit={handleSubmit}>
      <InputWrapper>
        <DateWrapper>
          <DateSelection
            aria-label="Date"
            name="date"
            dateFormat="dd.MM.yyyy"
            onChange={handleChange}
            type="date"
            value={date}
          />
          <CalendarIcon width={20} height={17}>
            <use href={`${icon}#icon-calendar`}></use>
          </CalendarIcon>
        </DateWrapper>
        <DescriptionInput
          placeholder="Product description"
          name="description"
          aria-label="Text"
          onChange={handleChange}
          type="text"
          value={description}
        />
        <SelectInput
          aria-label="Select"
          placeholder={'Product category'}
          width="200px"
          styles={customStyles}
          value={category}
          onChange={setCategory}
          isSearchable={false}
          options={productCategory.expenses}
          theme={theme => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: '#F5F6FB',
              primary: '#F5F6FB',
              danger: 'red',
            },
          })}
        />
        <CountWrapper>
          <CountInput
            aria-label="Number"
            onChange={handleChange}
            type="number"
            name="amount"
            placeholder="00.00"
            value={amount}
          />
          <CalculatorIcon
            width={isScreenMoreTablet ? 20 : 40}
            height={isScreenMoreTablet ? 20 : 40}
          >
            <use href={`${icon}#icon-calculator`}></use>
          </CalculatorIcon>
        </CountWrapper>
      </InputWrapper>
      <ButtonWrapper>
        <Button type="submit" color="accent" design="operation">
          Input
        </Button>
        <Button
          type="button"
          color="white"
          design="operation"
          onClick={resetForm}
        >
          Clear
        </Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default OperationsForm;
