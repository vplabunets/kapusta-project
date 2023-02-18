import styled, { keyframes } from 'styled-components';

import device from 'constants/deviceSize';

const letDown = keyframes`
  from {
    transform: translateY(0%);
  }
50% {
    transform: translateY(20px);
}
  to {
   transform: translateY(0%);
  }
`;

const increase = keyframes`
  from {
    width: 67px;
        background-color: #f5f6fb;
  }
50% {
    width: 80px;
        background-color: #DBDBDB;
}
  to {
    width: 67px;
        background-color: #f5f6fb;
  }
`;

export const LeftCabbageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > svg {
    width: 83px;
    height: 89px;
    margin-bottom: 20px;
    animation: ${letDown} 4s linear infinite;
  }

  & > div {
    display: block;

    width: 67px;
    height: 14px;
    border-radius: 50%;
    background-color: #f5f6fb;
    animation: ${increase} 4s linear infinite;
  }
`;

export const RightCabbageWrapper = styled.div`
  display: none;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;

    position: relative;
    top: -16px;
    left: 11px;

    z-index: -1;

    & > svg {
      display: block;
      width: 83px;
      height: 89px;
      margin-bottom: 20px;
      animation: ${letDown} 4s linear infinite;
    }

    & > div {
      display: block;

      width: 67px;
      height: 14px;
      border-radius: 50%;
      background-color: #f5f6fb;
      animation: ${increase} 4s linear infinite;
    }
  }
`;
