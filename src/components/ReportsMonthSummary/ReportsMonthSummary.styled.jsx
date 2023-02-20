//  import styled from 'styled-components';
import styled from 'styled-components';
import device from 'constants/deviceSize';

export const Section = styled.div`
  margin: 0 auto;

  background-color: #ffffff;

  width: 100%;
  margin-bottom: 32px;

  @media ${device.tablet} {
    padding: 20px 0;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
  }
  @media ${device.laptop} {
    margin-bottom: 37px;
  }
`;

export const Wrapper = styled.div`
  @media ${device.tablet} {
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
`;

export const Title = styled.p`
  text-align: center;
  font-weight: 700;
  width: 98px;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #000000;
`;

export const ReportList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 20px 0px;

  margin: 0 auto;
  overflow: hidden;
  width: 100%;

  @media ${device.tablet} {
    gap: 40px 15px;
  }
`;
