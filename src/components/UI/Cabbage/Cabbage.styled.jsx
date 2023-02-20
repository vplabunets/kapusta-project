import styled from 'styled-components';
import device from 'constants/deviceSize';
import { keyframes } from '@emotion/css';

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

const bubble = keyframes`
  0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
 stroke: #DFE2EB;
    }

    50% {
     
    stroke: #DBDBDB;
    }

    100%{
        transform: translateY(-150vw) rotate(750deg);
        opacity: 0;
        border-radius: 50%;

    }
`;

export const Item = styled.li`
  position: absolute;
  display: block;
  animation: ${bubble} 20s linear infinite;
  bottom: -85px;
  opacity: 0;

  &:nth-child(1) {
    transform: rotate(-90deg);

    left: 0%;
    animation-delay: 8s;
  }
  &:nth-child(2) {
    left: 20%;
    animation-delay: 5s;
  }
  &:nth-child(3) {
    left: 40%;
    transform: rotate(90deg);
    animation-delay: 7s;
  }
  &:nth-child(4) {
    left: 60%;
    transform: rotate(-90deg);
    animation-delay: 11s;
  }
  &:nth-child(5) {
    left: 80%;
    transform: rotate(-180deg);
    animation-delay: 13s;
  }
  &:nth-child(6) {
    left: 99%;
    transform: rotate(-90deg);
    animation-delay: 3s;
  }

  @media ${device.tablet} {
    &:nth-child(7) {
      left: 50%;
      animation-delay: 2s;
    }

    &:nth-child(8) {
      left: 55%;
      transform: rotate(-90deg);
      animation-delay: 6s;
    }
    &:nth-child(9) {
      left: 69%;
      transform: rotate(-180deg);
      animation-delay: 9s;
    }
    &:nth-child(10) {
      left: 95%;
      transform: rotate(-90deg);
      animation-delay: 1s;
    }
    &:nth-child(11) {
      left: 44%;
      animation-delay: 4s;
    }

    &:nth-child(12) {
      left: 85%;
      transform: rotate(-90deg);
      animation-delay: 15s;
    }
    &:nth-child(13) {
      left: 38%;
      transform: rotate(-120deg);
      animation-delay: 3s;
    }
    &:nth-child(14) {
      left: 90%;
      transform: rotate(-120deg);
      animation-delay: 17s;
    }
    &:nth-child(15) {
      left: 15%;
      transform: rotate(-120deg);
      animation-delay: 10s;
    }
    &:nth-child(16) {
      right: 65%;
      transform: rotate(-120deg);
      animation-delay: 6s;
    }
  }
`;
