import styled from 'styled-components';
import device from 'constants/deviceSize';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  align-self: center;
  margin-top: 45px;
  @media ${device.tablet} {
    margin-top: 0px;
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-self: space-between;
  }
  @media ${device.laptop} {
    margin-top: 0px;
    width: 100%;
    flex-direction: row-reverse;
    justify-content: right;
    align-self: space-between;
  }
`;
