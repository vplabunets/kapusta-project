import styled from 'styled-components';
import device from 'constants/deviceSize';

export const Wrapper = styled.div`
  /* @media ${device.tablet} {
    margin-left: 102px;
  }
  @media ${device.laptop} {
    margin-left: 214px;
  } */
`;
export const Title = styled.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.143;
  color: rgba(82, 85, 95, 0.7);
  text-align: center;
`;
export const ContainerPeriod = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7px;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.143;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--black-text-color);
  width: 130px;
  text-align: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: white;
  cursor: pointer;
  background-color: transparent;
`;
