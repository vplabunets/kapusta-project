//   import styled from 'styled-components';
import styled from 'styled-components';
import DEVICE from 'constants/deviceSize';
import { TRANSITION } from 'constants/constants';
const { duration, timing, delay } = TRANSITION;

export const Section = styled.div`
  margin: 0 auto;
  border-radius: 30px;
  background-color: ${p => p.theme.headerColor};

  width: 100%;
  margin-bottom: 32px;

  @media ${DEVICE.tablet} {
    padding: 20px 0;
    box-shadow: 0px 10px 60px ${p => p.theme.sectionShadow};
  }
  @media ${DEVICE.laptop} {
    margin-bottom: 37px;
  }
`;

export const Wrapper = styled.div`
  @media ${DEVICE.tablet} {
    width: 623px;
    margin: 0 auto;
  }
`;

export const Switcher = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const BtnArrow = styled.button`
  cursor: pointer;

  height: 20px;
  width: 15px;

  justify-content: center;
  align-items: center;
  display: flex;

  background-color: transparent;
  border: none;
  transition: transform ${duration} ${timing} ${delay};
  &:hover,
  &:focus {
    transform: scale(0.9);
  }
`;

export const Title = styled.p`
  text-align: center;
  font-weight: 700;
  width: 98px;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: ${p => p.theme.tableHeadTextColor};
`;

export const ReportList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 20px 0px;

  margin: 0 auto;
  overflow: hidden;
  width: 100%;

  @media ${DEVICE.tablet} {
    gap: 40px 15px;
  }
`;
