import styled from 'styled-components';

import DEVICE from 'constants/deviceSize';

export const Wrapper = styled.div`
  height: 422px;
  background-color: ${p => p.theme.lightTheme.headerColor};

  @media ${DEVICE.tablet} {
    padding: 20px 138px;
    border-radius: 30px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  }
`;
