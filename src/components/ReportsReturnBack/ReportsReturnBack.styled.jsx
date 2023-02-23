import { Link } from 'react-router-dom';

import styled from 'styled-components';

import DEVICE from 'constants/deviceSize';

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 16px;

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

      color: rgba(82, 85, 95, 0.7);
      display: block;
      margin-left: 15px;
    }

    @media ${DEVICE.laptop} {
      margin-left: 16px;
    }
  }
`;
