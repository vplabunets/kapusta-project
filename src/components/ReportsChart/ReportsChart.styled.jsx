import styled from 'styled-components';

import device from 'constants/deviceSize';

export const Wrapper = styled.div`
  height: 422px;
  padding: 20px 20px;
  margin: 0 auto;
  @media ${device.tablet} {
    padding: 20px 138px;
  }
`;
