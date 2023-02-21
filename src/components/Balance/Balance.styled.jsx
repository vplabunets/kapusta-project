// import styled from 'styled-components';
import styled from 'styled-components';
import device from 'constants/deviceSize';

export const Wrapper = styled.div`
  margin-top: 32px;
  background-color: ${p => p.theme.lightTheme.mainBackgroundColor};

  @media ${device.tablet} {
    display: flex;
    justify-content: start;
    align-items: baseline;
    flex-direction: row;
    /* margin-left: 32px; */
    margin-top: 0px;
  }
  @media ${device.laptop} {
    justify-content: center;
    align-items: baseline;
    flex-direction: row;
    margin-left: 0;
    flex-grow: 1;
  }
`;
export const Title = styled.h2`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  letter-spacing: 0.02em;
  color: rgba(82, 85, 95, 0.7);

  @media ${device.tablet} {
    margin-right: 21px;
    margin-left: 36px;
  }
  @media ${device.laptop} {
    margin-right: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  //padding-left: 20px;
  //padding-right: 20px;
  margin-top: 8px;

  @media ${device.tablet} {
    align-items: baseline;
    padding: 0;
    margin: 0;
  }
`;

export const Input = styled.input`
  font-weight: 700;
  font-size: 12px;
  width: 140px;
  height: 44px;
  padding: 0;
  padding-right: 14px;
  color: #000;
  text-align: right;
  border: 2px solid ${p => p.theme.lightTheme.headerColor};
  border-radius: 20px 0 0 20px;
  background-color: transparent;
  outline: none;

  @media ${device.tablet} {
    margin-right: 15px;
    border-radius: 16px;
    width: 121px;
  }

  @media ${device.laptop} {
    margin-right: 16px;
  }

  &::placeholder {
    font-weight: 700;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: 0.02em;
    color: ${p => p.theme.lightTheme.tableHeadTextColor};
  }
`;

export const Button = styled.button`
  width: 140px;
  height: 44px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  /* padding-left: 16px; */
  color: rgba(82, 85, 95, 0.7);
  border: 2px solid ${p => p.theme.lightTheme.headerColor};
  border-left: none;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
  background-color: transparent;
  :focus {
    color: ${p => p.theme.lightTheme.headerColor};
    background-color: ${p => p.theme.lightTheme.accentColor};
    border-color: ${p => p.theme.lightTheme.accentColor};
  }

  @media ${device.tablet} {
    width: 125px;
    border-radius: 16px;
    border: 2px solid ${p => p.theme.lightTheme.headerColor};
    justify-content: center;
    padding: 0;
  }
`;
