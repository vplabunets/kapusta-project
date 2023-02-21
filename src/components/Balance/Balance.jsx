import React from 'react';
import { Form, Title, Input, Button, Wrapper } from './Balance.styled';

const Balance = () => {
  // const [sum, setSum] = useState('');

  return (
    <Wrapper>
      <Title> Balance:</Title>
      <Form>
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
