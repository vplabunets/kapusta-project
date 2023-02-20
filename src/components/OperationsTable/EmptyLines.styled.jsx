import styled from 'styled-components';
import device from '../../constants/deviceSize';

export const Empty = styled.tr`
  display: none;

  @media ${device.tablet} {
    position: relative;
    height: 40px;
    border-left: 2px solid #f2f8f8;
    border-bottom: 2px solid #f2f8f8;
    width: calc(100% - 2px);
    display: table;
  }

  @media ${device.laptop} {
    height: 38px;
  }
`;
