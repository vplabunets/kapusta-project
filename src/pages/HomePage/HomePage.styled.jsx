import styled from 'styled-components';

import device from 'constants/deviceSize';

export const HomePageWrapper = styled.div`
  padding: 0 20px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    max-width: 426px;
  }

  @media ${device.laptop} {
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
`;

export const TextGroup = styled.div`
  margin-top: 86px;
  margin-bottom: 50px;

  @media ${device.tablet} {
    margin-top: 80px;
    margin-bottom: 80px;
  }

  @media ${device.laptop} {
    margin-right: 157px;
  }

  & > svg {
    width: 183px;
    height: 46.34px;

    @media ${device.tablet} {
      width: 306.52px;
      height: 77.69px;
    }
    @media ${device.laptop} {
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
    color: #52555f;

    @media ${device.tablet} {
      font-size: 16px;
      line-height: 1.19;
      letter-spacing: 0.18em;
    }
  }
`;

export const CabbageContainer = styled.div`
  margin-left: 35px;

  @media ${device.tablet} {
    position: absolute;
    left: 103px;
    top: 826px;
    margin-left: 0px;

    z-index: -1;
    display: flex;
  }

  @media ${device.laptop} {
    left: 230px;
    top: 658px;
  }
`;
