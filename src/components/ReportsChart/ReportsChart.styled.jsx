import styled from 'styled-components';

import DEVICE from 'constants/deviceSize';

export const Wrapper = styled.div`
  height: 422px;
  background-color: ${p => p.theme.headerColor};
  border-radius: 30px;

  @media ${DEVICE.tablet} {
    padding: 20px 138px;

    box-shadow: 0px 10px 60px ${p => p.theme.sectionShadow};
  }
`;
