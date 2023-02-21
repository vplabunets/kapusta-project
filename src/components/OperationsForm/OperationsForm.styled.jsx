import styled from 'styled-components';
import device from 'constants/deviceSize';
import Select from 'react-select';

export const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media ${device.tablet} {
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
    /* width: 624px; */
  }
  @media ${device.laptop} {
    padding-top: 30px;
    /* width: 1120px; */
    flex-direction: row;
    justify-self: flex-start;
    flex-wrap: nowrap;
    padding: 0;
  }
`;

export const InputWrapper = styled.div`
  align-items: center;
  display: contents;
  flex-direction: column;
  border-bottom-left-radius: 30%;
  background-color: transparent;
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
  }
  @media ${device.laptop} {
    height: 44px;
    /* width: 104px; */
    text-align: center;
  }
`;

export const DateWrapper = styled.div`
  position: relative;
  margin-bottom: 32px;
  @media ${device.tablet} {
    margin-bottom: 0px;
  }
`;

export const DateSelection = styled.input`
  display: block;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #52555f;
  background-color: transparent;
  border: none;
  width: 140px;
  height: 40px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  border: 2px solid #fff;
  border-radius: 16px;
  @media ${device.tablet} {
    border: none;
    font-weight: 900;
    font-size: 12px;
    width: 90px;
    height: 100%;
    margin-right: 32px;
    text-align: end;
  }
  @media ${device.laptop} {
    width: 104px;
    padding-left: 20px;
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
  left: 11px;
  top: 12px;
  cursor: pointer;
  @media ${device.tablet} {
    left: -12px;
    top: 2px;
  }
  @media ${device.laptop} {
    left: -5px;

    text-align: center;
  }
`;

export const DescriptionInput = styled.input`
  display: block;
  font-family: inherit;
  width: 100%;
  height: 44px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  font-size: 12px;
  line-height: 1.14;
  text-align: start;
  background-color: transparent;
  padding-left: 30px;

  border: 2px solid #ffffff;
  border-bottom: none;
  color: #c7ccdc;

  &::placeholder {
    font-weight: 400;
    color: #c7ccdc;
  }

  @media ${device.tablet} {
    border-top-right-radius: 0px;
    border: 2px solid #f6f7fc;
    display: flex;
    padding-left: 12px;
  }
  @media ${device.laptop} {
    padding-left: 12px;
    /* width: 238px; */
  }
`;

export const SelectInput = styled(Select)`
  display: block;
  font-family: inherit;
  width: 100%;
  height: 44px;
  border: 2px solid #ffffff;
  border-bottom-right-radius: 16px;
  color: #c7ccdc;
  @media ${device.tablet} {
    border: 2px solid #f6f7fc;
    display: flex;
    border-left: none;
    border-right: none;
    border-bottom-right-radius: 0px;
  }
  @media ${device.laptop} {
    /* width: 238px; */
  }
`;

export const CountWrapper = styled.div`
  position: relative;
  width: 183px;
  @media ${device.tablet} {
    display: flex;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    width: 110px;
    border: 2px solid #f5f6fb;
  }
  @media ${device.laptop} {
    width: 121px;
  }
`;

export const CalculatorIcon = styled.svg`
  position: absolute;
  top: 34px;
  right: 12px;
  padding: 8px;
  border-left: 2px solid #ffffff;

  /* position: absolute;
  right: 30px;
  top: 44px; */
  @media ${device.tablet} {
    border: none;
    right: 16px;
    top: 10px;
    padding: 0;
  }
  @media ${device.laptop} {
    right: 17px;
    top: 12px;
  }
`;

export const CountInput = styled.input`
  width: 183px;
  height: 44px;
  padding-right: 55px;
  padding-left: 55px;
  border-radius: 22px;
  font-weight: 900;
  font-size: 12px;
  line-height: 1.14;
  text-align: center;
  margin-top: 32px;
  border: 2px solid #ffffff;
  background-color: transparent;
  @media ${device.tablet} {
    height: 40px;
    border: 2px solid #f6f7fc;
    width: 110px;
    margin-top: 0;
    padding-right: 45px;
    padding-left: 10px;
    border: transparent;
  }
  @media ${device.laptop} {
    width: 121px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 80px;
  gap: 20px;
  @media ${device.tablet} {
    margin-top: 32px;
  }
  @media ${device.laptop} {
    margin-left: 32px;
    margin-top: 0;
    gap: 15px;
  }
`;
