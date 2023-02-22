import styled from 'styled-components';
import device from 'constants/deviceSize';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    margin-bottom: 40px;
    padding: 32px 32px 42px 32px;
    background-color: #ffffff;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 0px 30px 30px 30px;
  }
  @media ${device.laptop} {
    height: 579px;
    padding: 32px 32px 32px 32px;
    background-color: #ffffff;
    margin-bottom: 0;
  }
`;
export const WrapperTableSummary = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`;