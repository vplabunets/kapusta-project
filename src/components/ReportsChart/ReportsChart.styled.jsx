import styled from 'styled-components';

import device from 'constants/deviceSize';

export const Wrapper = styled.div`
  height: 422px;
  background-color: #ffffff;

  @media ${device.tablet} {
    padding: 20px 138px;
    border-radius: 30px;
  }
`;
