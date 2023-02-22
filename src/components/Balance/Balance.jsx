import React from 'react';
import { Form, Title, Input, Button, Wrapper } from './Balance.styled';

const body = document.querySelector('body');

const Balance = ({ addBalance }) => {
  // const [sum, setSum] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    addBalance(e.target.elements.balance.value);
    body.style.cssText = `overflow: visible`;
  };

  return (
    <Wrapper>
      <Title> Balance:</Title>
      <Form onSubmit={onSubmit}>
        <Input
          type="number"
          name="balance"
          placeholder="00.00 UAH"
          pattern="[0-9, .UAH]*"
          // value={`${sum}`}
          // onChange={e => console.log(e.target.value)}
        />

        <Button type="submit">Confirm</Button>
      </Form>
    </Wrapper>
  );
};

export default Balance;
