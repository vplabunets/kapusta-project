import React from 'react';
import { Form, Title, Input, Button, Wrapper, Label, InputContainer } from './Balance.styled';
import { useTranslation } from 'react-i18next';
const body = document.querySelector('body');

const Balance = ({ addBalance }) => {
  // const [sum, setSum] = useState('');
  const { t } = useTranslation();
  const onSubmit = e => {
    e.preventDefault();
    addBalance(e.target.elements.balance.value);
    body.style.cssText = `overflow: visible`;
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
          // value={`${sum}`}
          // onChange={e => console.log(e.target.value)}
        />
        <Label>{t('UAH')} </Label>
        </InputContainer>
        <Button type="submit">{t('button.CONFIRM')}</Button>
      </Form>
    </Wrapper>
  );
};

export default Balance;
