import styled from 'styled-components';

import device from 'constants/deviceSize';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 32px;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
