import styled from 'styled-components';
import DEVICE from '../../constants/deviceSize';

export const Empty = styled.tr`
  display: none;

  @media ${DEVICE.tablet} {
    position: relative;
    height: 40px;
    border-left: 2px solid ${p => p.theme.lightTheme.tableBodyColor};
    border-bottom: 2px solid ${p => p.theme.lightTheme.tableBodyColor};
    width: calc(100% - 2px);
    display: table;
  }

  @media ${DEVICE.laptop} {
    height: 38px;
  }
`;
