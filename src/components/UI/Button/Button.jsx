import { Btn } from './Button.styled';

// children - text in the button
// color can be white and accent
// type - any (button, submit, etc)
// design can be home, operation, modal

export const Button = ({ children, color, type, design }) => (
  <Btn type={type} color={color} design={design}>
    {children}
  </Btn>
);
