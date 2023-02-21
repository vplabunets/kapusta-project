import styled from 'styled-components';
import device from 'constants/deviceSize';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

export const OperationsModalOpenButton = styled.button`
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 6px;
  width: 150px;
  margin-top: 32px;
  margin-bottom: 32px;
  background-color: #ff751d;
  color: #ffffff;
  text-transform: uppercase;
  border: none;
  font-family: inherit;
  font-weight: 700;
  filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));

  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  svg {
    fill: #ffffff;
  }

  &:focus {
    transform: scale(0.9);
  }

  @media ${device.tablet} {
    display: none;
  }
`;
