import styled from 'styled-components';
import device from 'constants/deviceSize';

export const Wrap = styled.div`
  display: flex;
  /* margin-left: auto; */
  justify-content: center;
  @media ${device.laptop} {
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
