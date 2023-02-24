import React from 'react';
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
import { useDispatch } from 'react-redux';
import { setBalance } from 'redux/auth/operations';


const Balance = () => {

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(setBalance({ balance: e.target.elements.balance.value }));
  
  };

  return (
    <Wrapper>
      <Title> {t('Balance')}:</Title>
      <Form onSubmit={onSubmit}>
        <InputContainer>
          <Input
            type="number"
            name="balance"
            placeholder="00.00"
            pattern="[0-9, .UAH]*"
          />
          <Label>{t('UAH')} </Label>
        </InputContainer>
        <Button type="submit">{t('button.CONFIRM')}</Button>
      </Form>
    </Wrapper>
  );
};

export default Balance;
