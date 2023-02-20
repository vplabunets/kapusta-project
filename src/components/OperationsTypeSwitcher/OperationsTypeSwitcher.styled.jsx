import styled from 'styled-components';
import device from 'constants/deviceSize';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-self: flex-end;
  justify-content: center;
  width: 100%;

  @media ${device.tablet} {
    position: static;
    display: flex;
    margin-top: 60px;
    align-self: flex-start;
    width: 276px;
  }
`;
export const TypeButton = styled.button`
  display: flex;
  font-weight: 700;
  height: 53px;
  width: 100%;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background-color: ${p => (p.active ? '#FF751D' : '#F5F6FB')};
  color: ${p => (p.active ? '#FFFFFF' : '#000000')};

  &:first-child {
    margin-right: 4px;
  }

  @media ${device.tablet} {
    background-color: ${p => (p.active ? '#FEFEFE' : '#FAFBFD')};
    color: ${p => (p.active ? '#FF751D' : '#000000')};
    width: 138px;
    height: 40px;
    border: none;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    &:first-child {
      margin-right: 0px;
    }
  }

  @media ${device.laptop} {
    position: static;
  }
`;
