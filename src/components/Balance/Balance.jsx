import React, { useState } from 'react';
import {
  Form,
  Title,
  Input,
  Button,
  Wrapper,
  Label,
  InputContainer,
} from './Balance.styled';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setBalance } from 'redux/auth/operations';

import { selectBalance } from 'redux/auth/selectors';



const Balance = () => {
  const currentBalance = useSelector(selectBalance);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(setBalance({ balance: e.target.elements.balance.value }));

  };

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <Title> {t('Balance')}:</Title>
      <Form onSubmit={onSubmit}>
        <InputContainer>
          <Input
            type="number"
            name="balance"
            placeholder={`${currentBalance.toFixed(2)}`}
            pattern="[0-9, .UAH]*"
            value={value}
            onChange={onChange}
          />
          <Label>{t('UAH')} </Label>
        </InputContainer>
        <Button type="submit">{t('button.CONFIRM')}</Button>
      </Form>
    </Wrapper>
  );
};

export default Balance;

