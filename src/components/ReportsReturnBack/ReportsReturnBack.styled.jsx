import { Link } from 'react-router-dom';

import styled from 'styled-components';

import DEVICE from 'constants/deviceSize';

import { TRANSITION } from 'constants/constants';
const { duration, timing, delay } = TRANSITION;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 16px;
  color: ${p => p.theme.lightTheme.lightGreyColor};

  transition: color ${duration} ${timing} ${delay};

  &:hover,
  &:focus {
    color: ${p => p.theme.lightTheme.mainTextColor};
  }

  @media ${DEVICE.tablet} {
    margin-bottom: 0px;
  }

  & > p {
    display: none;

    @media ${DEVICE.tablet} {
      font-weight: 400;
      font-size: 12px;
      line-height: 1.17;

      letter-spacing: 0.04em;

      color: ${p => p.theme.lightTheme.lightGreyColor};
      display: block;
      margin-left: 15px;
    }

    @media ${DEVICE.laptop} {
      margin-left: 16px;
    }
  }
`;
