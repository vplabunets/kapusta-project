import styled from 'styled-components';

import DEVICE from 'constants/deviceSize';

export const HomePageWrapper = styled.div`
  padding: 0 20px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  @media ${DEVICE.tablet} {
    max-width: 426px;
  }

  @media ${DEVICE.laptop} {
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
`;

export const TextGroup = styled.div`
  margin-top: 86px;
  margin-bottom: 50px;

  @media ${DEVICE.tablet} {
    margin-top: 80px;
    margin-bottom: 80px;
  }

  @media ${DEVICE.laptop} {
    margin-right: 157px;
  }

  & > svg {
    width: 183px;
    height: 46.34px;

    @media ${DEVICE.tablet} {
      width: 306.52px;
      height: 77.69px;
    }
    @media ${DEVICE.laptop} {
      width: 377px;
      height: 120px;
    }
  }
  & > p {
    font-weight: 700;
    font-size: 13px;
    line-height: 1.15;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${p => p.theme.mainTextColor};

    @media ${DEVICE.tablet} {
      font-size: 16px;
      line-height: 1.19;
      letter-spacing: 0.18em;
    }
  }
`;

export const CabbageContainer = styled.div`
  margin-left: 35px;

  @media ${DEVICE.tablet} {
    position: absolute;
    left: 103px;
    top: 826px;
    margin-left: 0px;

    z-index: -1;
    display: flex;
  }

  @media ${DEVICE.laptop} {
    left: 230px;
    top: 658px;
  }
`;
