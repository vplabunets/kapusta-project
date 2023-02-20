import styled, { keyframes } from 'styled-components';

import device from 'constants/deviceSize';

export const BackgroundGrey = styled.div`
  z-index: -1;
  width: 100%;
  height: 342px;

  position: absolute;
  top: 0;
  background-color: #f5f6fb;
  border-bottom-left-radius: 20%;

  overflow: hidden;

  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

  @media ${device.tablet} {
    height: 582px;
  }
  @media ${device.laptop} {
    height: 582.5px;
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
    left: 100%;
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
