import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DEVICE from 'constants/deviceSize';

import { TRANSITION } from 'constants/constants';
const { duration, timing, delay } = TRANSITION;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  @media ${DEVICE.laptop} {
    padding-left: 4px;
  }
`;

export const Title = styled.h2`
  margin: 0 15px 0 0;
  vertical-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: ${p => p.theme.lightGreyColor};

  @media ${DEVICE.tablet} {
    margin-bottom: 0;
    justify-content: end;
  }

  transition: color ${duration} ${timing} ${delay};

  &:hover,
  &:focus {
    color: ${p => p.theme.mainTextColor};
  }
`;

export const ReportLink = styled(Link)`
  color: ${p => p.theme.lightGreyColor};
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  align-items: center;
  text-align: center;
  text-decoration: none;
  & > svg {
    stroke: ${p => p.theme.lightGreyColor};
  }
`;
