import styled from 'styled-components';

import device from 'constants/deviceSize';

export const ReportItemButton = styled.li`
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  width: 92px;
  border-bottom: 1px solid #e0e5eb;

  @media ${device.tablet} {
    border-bottom: none;
    padding-bottom: 0px;
    width: 90px;
  }
`;

export const Sum = styled.p`
  text-align: center;
  font-size: 12px;
  line-height: 1.17;

  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #52555f;
  margin-bottom: 5px;
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export const ButtonReport = styled.button`
  cursor: pointer;
  height: 60px;
  max-width: 60px;

  background-color: transparent;
  border: none;
  margin-bottom: 5px;

  & > div {
    z-index: -1;
    display: block;
    width: 59px;
    height: 46px;
    background-color: #f5f6fb;
    border-radius: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  & > svg {
    z-index: 1;
  }
`;

export const Type = styled.p`
  flex-grow: 1;
  text-align: center;
  font-size: 12px;
  line-height: 1.17;

  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #52555f;
`;
