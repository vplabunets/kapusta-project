import styled from 'styled-components';
import device from 'constants/deviceSize'; 

export const Wrap = styled.div`
  display: flex;
  justify-content: end;
`;

export const Title = styled.h2`
  margin: 0 15px 0 0;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: rgba(82, 85, 95, 0.7);
   @media ${device.tablet}  {
        margin-bottom: 0;
    }
    transition: all linear 0.3s;
    &:hover {
        color: #555;
    }
    margin-bottom: 40px;
`;