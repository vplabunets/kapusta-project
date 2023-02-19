import styled from 'styled-components';
import device from 'constants/deviceSize';
import Select from 'react-select';

export const FormWrapper = styled.form`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media ${device.tablet} {
    margin: 0 auto;
    width: 624px;
    height: 44px;
    grid-column-start: 1;
    grid-column-end: 1;
  }
  @media ${device.laptop} {
    /* width: 1120px; */
    flex-direction: row;
    justify-self: flex-start;
    flex-wrap: nowrap;
    padding: 0;
    grid-column-start: 1;
    grid-column-end: 2;
    /* grid-row-start: 1;
    grid-row-end: 2; */
  }
`;

export const InputWrapper = styled.div`
  width: 100vw;
  height: 258px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom-left-radius: 30%;
  /* background-color: #; */
  @media ${device.tablet} {
    flex-direction: row;
    height: 192px;
  }
  @media ${device.laptop} {
    height: 136px;
    /* width: 104px;
    text-align: center; */
  }
`;

export const DateWrapper = styled.div`
  position: relative;
`;

export const DateSelection = styled.input`
  font-weight: 900;
  font-size: 12px;
  line-height: 14px;
  /* color: #; */
  background-color: transparent;
  border: none;
  width: 110px;
  height: 44px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  @media ${device.tablet} {
    width: 90px;
    height: 100%;
    margin-right: 44px;
    text-align: end;
  }
  @media ${device.tablet} {
    width: 104px;
    text-align: center;
  }
  &::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    z-index: 9;
    width: 90px;
    height: 100%;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
  }
`;

export const CalendarIcon = styled.svg`
  position: absolute;
  z-index: 2;
  left: -2px;
  top: 12px;
  cursor: pointer;
  @media ${device.tablet} {
    left: -5px;
    top: 2px;
  }
  @media ${device.laptop} {
    width: 104px;
    text-align: center;
  }
`;

export const DescriptionInput = styled.input`
  width: 280px;
  height: 44px;
  border-top-left-radius: 16px;
  font-size: 12px;
  line-height: 14px;
  text-align: start;
  background-color: transparent;
  padding-left: 30px;
  border: 2px solid #f6f7fc;
  color: #c7ccdc;
  &::placeholder {
    font-weight: 400;
    color: #c7ccdc;
  }
  @media ${device.tablet} {
    width: 184px;
    padding-left: 19px;
  }
  @media ${device.laptop} {
    width: 238px;
  }
`;

export const SelectInput = styled(Select)`
  width: 280px;
  /* height: 144px; */
  height: 37px;
  border: 2px solid #f6f7fc;
  border-bottom-right-radius: 16px;
  color: #c7ccdc;
`;

export const CountWrapper = styled.div`
  position: relative;
  width: 183px;
  @media ${device.tablet} {
    width: 110px;
  }
  @media ${device.laptop} {
    width: 121px;
  }
`;

export const CalculatorIcon = styled.svg`
  position: absolute;
  right: 0px;
  top: 10px;
  top: 32px;
  padding: 159px;
  padding: 23px;
  padding: 8px;

  /* border: 1px solid green; */
  /* border-bottom-right-radius: 20px; */
  /* border-top-right-radius: 20px; */
  /* border-left-color: chocolate; */
  border-left: 1px solid black;
  /* position: absolute;
  right: 30px;
  top: 44px; */
  @media ${device.tablet} {
    right: 16px;
    top: 12px;
  }
  @media ${device.laptop} {
    right: 17px;
    top: 12px;
  }
`;

export const CountInput = styled.input`
  width: 183px;
  height: 44px;
  border: 2px solid #f6f7fc;
  padding-right: 55px;
  padding-left: 55px;
  border-radius: 22px;
  font-weight: 900;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  margin-top: 32px;
  background-color: transparent;
  color: #c7ccdc;
  @media ${device.tablet} {
    width: 110px;
    margin-top: 0;
    padding-right: 45px;
    padding-left: 10px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
  @media ${device.laptop} {
    width: 121px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 32px;

  @media ${device.laptop} {
    margin-left: 32px;
    margin-top: 0;
  }
`;
