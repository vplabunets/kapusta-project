import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';

import useMediaQuery from '@mui/material/useMediaQuery';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import icon from 'images/icons-sprite.svg';

import { addTransaction } from 'redux/transaction/operations';
import { selectOperationType } from 'redux/transaction/selectors';

import { Button } from 'components/UI/Button/Button';

import { customStyles } from './SelectorCustomStyle';

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

const OperationsForm = ({ value }) => {
  const isScreenMoreTablet = useMediaQuery('(min-width: 768px)');
  const { t } = useTranslation();
  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const dispatch = useDispatch();
  const type = useSelector(selectOperationType);

  const handleSubmit = evt => {
    evt.preventDefault();
    if (description.trim().length === 0 || !category || !amount) {
      return toast.warning('Missing required fields');
    }
    const userEnteredData = {
      operation: type,
      description: description,
      date: date,
      category: category.value,
      sum: amount,
      month: moment(date).format('MMMM'),
      year: moment(date).format('YYYY'),
      currency: 'UAH',
    };
    dispatch(addTransaction(userEnteredData));
    resetForm();
    return;
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
        setAmount(value);
        break;

      default:
        break;
    }
  };
  const expensesCategory = t('expensesCategory', { returnObjects: true });
  const incomeCategory = t('incomeCategory', { returnObjects: true });
  const resetForm = () => {
    setDate(moment(new Date()).format('YYYY-MM-DD'));
    setDescription('');
    setCategory('');
    setAmount('');
  };

  useEffect(() => {
    if (value) {
      resetForm();
    }
  }, [value]);

  let actualOptions = '';
  if (type === 'expenses') {
    actualOptions = expensesCategory;
  } else {
    actualOptions = incomeCategory;
  }
  const ProductCateg = t('Product category', { returnObjects: true });
  const Typeofincome = t('Type of income', { returnObjects: true });

  let actualPlaceholder = '';
  if (type === 'expenses') {
    actualPlaceholder = ProductCateg;
  } else {
    actualPlaceholder = Typeofincome;
  }

  return (
    <FormWrapper autoComplete="off" onSubmit={handleSubmit}>
      <InputWrapper>
        <DateWrapper>
          <DateSelection
            aria-label="Date"
            name="date"
            dateFormat="yyyy-MM-dd"
            onChange={handleChange}
            type="date"
            value={date}
          />
          <CalendarIcon width={20} height={17}>
            <use href={`${icon}#icon-calendar`}></use>
          </CalendarIcon>
        </DateWrapper>
        <DescriptionInput
          placeholder={t('Product description')}
          name="description"
          aria-label="Text"
          onChange={handleChange}
          type="text"
          value={description}
        />
        <SelectInput
          aria-label="Select"
          placeholder={actualPlaceholder}
          width="200px"
          styles={customStyles}
          value={category}
          onChange={setCategory}
          isSearchable={false}
          options={actualOptions}
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
            onChange={handleChange}
            type="number"
            name="amount"
            placeholder="00.00"
            min={0.01}
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
          {t('button.Input')}
        </Button>
        <Button
          type="button"
          color="white"
          design="operation"
          onClick={resetForm}
        >
          {t('button.Clear')}
        </Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

OperationsForm.propTypes = {
  value: PropTypes.number,
};

export default OperationsForm;
