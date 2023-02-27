import { PropTypes } from 'prop-types';

import { MessageText } from './Message.styled';

export const Message = ({ text }) => <MessageText>{text}</MessageText>;

Message.propTypes = {
  text: PropTypes.string.isRequired,
};
