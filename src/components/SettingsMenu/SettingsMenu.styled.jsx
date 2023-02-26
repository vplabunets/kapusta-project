import styled from 'styled-components';
import { keyframes } from '@emotion/css';
import TRANSITION from 'constants/constants';
import DEVICE from 'constants/deviceSize';

const barrelRoll = keyframes`
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg)}
`;

const invertBarrelRoll = keyframes`0% {transform: rotate(0deg); }
    100% { transform: rotate(-360deg); }`;
///////////////////////////////////////////////////////////////////////////

const Backdrop = styled.div`
  z-index: 4;
  position: fixed;
  left: 0;
  top: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Menu = styled.div`
  height: 80px;
  width: 100%;
  background-color: rgb(255 165 108 / 93%);
  box-shadow: ${p => p.theme.headerBoxShadow}, 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
  position: absolute;
  z-index: 5;
  top: 0px;
  right: 0px;
  border-radius: 0px 0px 0px 24px;
  padding: 10px;

  @media ${DEVICE.tablet} {
    height: 260px;
    width: 280px;
    top: 0px;
    padding: 15px;
    right: 0px;
  }
`;

const Title = styled.p`
  font-family: inherit;
  line-height: 1.17;
  letter-spacing: 0.04em;
  color: ${p => p.theme.tableHeadTextColor};
  font-size: 12px;
  text-align: center;
  margin-bottom: 10px;
  @media ${DEVICE.tablet} {
    margin-bottom: 33px;
    font-size: 18px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: start;
  @media ${DEVICE.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const SettingsWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* position: relative; */
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  color: rgba(82, 85, 95, 1);
  transition: color ${TRANSITION.duration} ${TRANSITION.timing};
  &:hover,
  &:focus {
    color: ${p => p.theme.tableHeadTextColor};
  }
  &:hover i {
    animation-play-state: running;
  }
  @media ${DEVICE.tablet} {
    margin-bottom: 50px;
  }
`;

const GearsWrapper = styled.div`
  height: 1px;
  position: relative;
  width: 80px;

  @media ${DEVICE.tablet} {
    width: 280px;
  }
`;

const Gear = styled.i`
  display: block;
  position: absolute;
  width: 15px;
  height: 15px;
  top: 0px;
  left: 49%;
  background: url(http://i.imgur.com/lOBxb.png);
  background-size: contain;
  background-repeat: no-repeat;
  animation: ${barrelRoll} 2s linear infinite;
  animation-play-state: running;
  &:last-of-type {
    top: 7px;
    left: 30%;
    animation-name: ${invertBarrelRoll};
  }
  @media ${DEVICE.tablet} {
    width: 25px;
    height: 25px;
    top: 0px;
    left: 49%;
    &:last-of-type {
      top: 15px;
      left: 41.5%;
      animation-name: ${invertBarrelRoll};
    }
  }

  @media ${DEVICE.laptop} {
    animation-play-state: paused;
  }
`;

const Settings = styled.p`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 11px;
  line-height: 1.17;
  letter-spacing: 0.04em;

  @media ${DEVICE.tablet} {
    font-size: 16px;
  }
`;

const LanguageWrapper = styled.div`
  text-align: center;
`;

const LanguageSelect = styled.p`
  font-family: inherit;
  line-height: 1.17;
  letter-spacing: 0.04em;
  color: rgba(82, 85, 95, 1);

  font-size: 11px;
  @media ${DEVICE.tablet} {
    margin-bottom: 10px;
    font-size: 16px;
  }
`;

const LanguageButton = styled.button`
  border-radius: 50%;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  &:not(:last-child) {
    margin-right: 5px;
  }
  @media ${DEVICE.tablet} {
    margin-right: 5px;
  }
`;

const FlagImg = styled.img`
  display: block;
  width: 25px;
  height: 25px;
  transition: filter ${TRANSITION.duration} ${TRANSITION.timing};

  &:hover,
  &:focus {
    filter: drop-shadow(1px 3px 10px ${p => p.theme.accentColor});
  }
  @media ${DEVICE.tablet} {
    width: 32px;
    height: 32px;
  }
`;
export {
  Menu,
  Gear,
  Title,
  Settings,
  LanguageSelect,
  LanguageButton,
  FlagImg,
  SettingsWrapper,
  LanguageWrapper,
  Container,
  Backdrop,
  GearsWrapper,
};
