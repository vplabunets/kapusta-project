import styled from 'styled-components';
import { keyframes } from '@emotion/css';
import transition from 'constants/constants';
import device from 'constants/deviceSize';

const barrelRoll = keyframes`
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg)}
`;

const invertBarrelRoll = keyframes`0% {transform: rotate(0deg); }
    100% { transform: rotate(-360deg); }`;
///////////////////////////////////////////////////////////////////////////
const Menu = styled.div`
  height: 80px;
  width: 100%;
  /* background-color: rgba(255, 107, 8, 0.9); */
  /* background-color: rgba(255, 117, 29, 0.9); */
  background-color: rgb(255 165 108 / 93%);
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  position: absolute;
  z-index: 2;
  top: 56px;
  right: 0px;
  border-radius: 0px 0px 0px 24px;
  padding: 10px;

  @media ${device.tablet} {
    height: 260px;
    width: 280px;
    top: 56px;
    padding: 15px;
    right: 0px;
  }
`;

const Title = styled.p`
  font-family: 'Roboto';
  line-height: 1.17;
  letter-spacing: 0.04em;
  color: ${p => p.theme.lightTheme.tableHeadTextColor};
  font-size: 12px;
  text-align: center;
  margin-bottom: 15px;
  @media ${device.tablet} {
    margin-bottom: 33px;
    font-size: 18px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: start;
  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  &:hover i {
    animation-play-state: running;
  }
  @media ${device.tablet} {
    margin-bottom: 45px;
  }
`;

const Gear = styled.i`
  display: block;
  position: absolute;
  width: 15px;
  height: 15px;
  top: 12px;
  left: 35px;
  background: url(http://i.imgur.com/lOBxb.png);
  background-size: contain;
  background-repeat: no-repeat;
  animation: ${barrelRoll} 2s linear infinite;
  animation-play-state: running;
  &:last-of-type {
    top: 20px;
    left: 23px;
    animation-name: ${invertBarrelRoll};
  }
  @media ${device.tablet} {
    width: 25px;
    height: 25px;
    top: 20px;
    left: 55px;
    &:last-of-type {
      top: 27px;
      left: 32px;
      animation-name: ${invertBarrelRoll};
    }
  }

  @media ${device.laptop} {
    animation-play-state: paused;
  }
`;

const Settings = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 11px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  color: rgba(82, 85, 95, 1);
  transition: color ${transition.duration} ${transition.timing};
  &:hover,
  &:focus {
    color: ${p => p.theme.lightTheme.tableHeadTextColor};
  }

  @media ${device.tablet} {
    font-size: 16px;
  }
`;

const LanguageWrapper = styled.div`
  text-align: center;
`;

const LanguageSelect = styled.p`
  font-family: 'Roboto';
  line-height: 1.17;
  letter-spacing: 0.04em;
  color: rgba(82, 85, 95, 1);

  font-size: 11px;
  @media ${device.tablet} {
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
  @media ${device.tablet} {
    margin-right: 5px;
  }
`;

const FlagImg = styled.img`
  display: block;
  width: 25px;
  height: 25px;
  transition: filter ${transition.duration} ${transition.timing};

  &:hover,
  &:focus {
    filter: drop-shadow(1px 3px 10px ${p => p.theme.lightTheme.accentColor});
  }
  @media ${device.tablet} {
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
};
