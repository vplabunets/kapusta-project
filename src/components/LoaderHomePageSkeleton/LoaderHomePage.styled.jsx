import styled from 'styled-components';
import DEVICE from '../../constants/deviceSize';

export const LoaderBox = styled.div`
  height: 100vh;
  margin: 0;
  display: grid;
  place-items: center;
  margin-top: 70px;
`;

export const Post = styled.div`
  @media ${DEVICE.mobile} {
    display: block;
  }

  @media ${DEVICE.laptop} {
    display: flex;
  }
`;

export const LeftCol = styled.div`
  height: 139px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${DEVICE.mobile} {
    width: 300px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 80px;
  }

  @media ${DEVICE.laptop} {
    padding-top: 200px;
    width: 377px;
    margin-right: 200px;
    margin-left: 0px;
    margin-bottom: 0px;
  }
`;

export const RightCol = styled.div`
  flex: 1;
  height: 350px;
  border-radius: 30px;
  box-shadow: 0px 10px 60px ${p => p.theme.sectionShadow};

  @media ${DEVICE.mobile} {
    width: 300px;
    padding-top: 50px;
    margin-left: 10px;
  }

  @media ${DEVICE.tablet} {
    padding-top: 50px;
  }

  @media ${DEVICE.laptop} {
    padding-top: 80px;
  }
`;

export const RightColBox = styled.div`
  height: 552px;
  width: 426px;

  @media ${DEVICE.mobile} {
    width: 300px;
  }
`;
