import styled from 'styled-components';
import device from 'constants/deviceSize';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  display: flex;
  /* margin-left: auto; */
  justify-content: center;
  @media ${device.laptop} {
    padding-left: 4px;
  }
`;

export const Title = styled.h2`
  margin: 0 15px 0 0;
  vertical-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: rgba(82, 85, 95, 0.7);
  @media ${device.tablet} {
    margin-bottom: 0;
    justify-content: end;
  }
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    color: #555;
  }
`;

export const ReportLink = styled(Link)`
  color: rgba(82, 85, 95, 0.7);
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  align-items: center;
  text-align: center;
  text-decoration: none;
`;
