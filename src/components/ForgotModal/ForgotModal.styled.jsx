import styled from 'styled-components';
import DEVICE from 'constants/deviceSize';
export const Wrapper = styled.div`
  display: flex;
  padding-bottom: 79px;
  flex-direction: column;
  width: 240px;
  @media ${DEVICE.tablet} {
    width: 252px;
  }
`;

export const ButtonBack = styled.button`
  position: relative;
  top: 5px;
  left: 0;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  justify-content: center;
  outline: none;
  border: none;
  width: 24px;
  height: 24px;
  margin-bottom: 79px;
  & svg {
    width: 24px;
    height: 24px;
  }
`;

export const Text = styled.h2`
  width: 100%;
  display: block;

  margin: 0 auto 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.04em;
  color: #52555f;
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
