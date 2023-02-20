import styled from 'styled-components';
import device from 'constants/deviceSize';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${device.tablet} {
    /* margin-top: 60px; */
  }
  @media ${device.laptop} {
  }
`;
export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    height: 579px;
    padding: 32px 32px 83px 32px;
    background-color: #ffffff;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-start: 1;
    grid-row-end: 1;
  }
  @media ${device.laptop} {
    height: 579px;
    padding: 32px 32px 83px 32px;
    background-color: #ffffff;
    display: grid;
    grid-row-start: 1;
    grid-row-end: 2;
    grid-template-columns: repeat(2, 1fr);
  }
`;
