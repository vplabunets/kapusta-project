import styled from 'styled-components';
import DEVICE from '../../constants/deviceSize';

export const LoaderBoxMob = styled.div`
@media ${DEVICE.mobile} {
    margin-left: auto;
    margin-right: auto;
   }

   @media ${DEVICE.tablet} {
    display: none;
   }
`;

export const LoaderBoxTab = styled.div`
@media ${DEVICE.mobile} {
    display: none;
   }

@media ${DEVICE.tablet} {
    display: block;
    margin-left: auto;
    margin-right: auto;
   }

   @media ${DEVICE.laptop} {
    display: none;
   }
`;

export const LoaderBoxLap = styled.div`
@media ${DEVICE.mobile} {
    display: none;
   }

@media ${DEVICE.laptop} {
    display: block;
    margin-left: auto;
    margin-right: auto;
   }
`;