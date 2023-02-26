import styled from 'styled-components';
import DEVICE from 'constants/deviceSize';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${DEVICE.tablet} {
    margin-bottom: 40px;
    padding: 32px 32px 42px 32px;
    background-color: ${p => p.theme.headerColor};
    box-shadow: 0px 10px 60px ${p => p.theme.sectionShadow};
    border-radius: 0px 30px 30px 30px;
  }
  @media ${DEVICE.laptop} {
    height: 579px;
    padding: 32px 32px 32px 32px;
    background-color: ${p => p.theme.headerColor};
    margin-bottom: 0;
  }
`;
export const WrapperTableSummary = styled.div`
  display: flex;
  flex-direction: column;
  @media ${DEVICE.tablet} {
  }
  @media ${DEVICE.laptop} {
    flex-direction: row;
  }
`;
