import styled from 'styled-components';
import DEVICE from '../../constants/deviceSize';

export const LoaderBox = styled.div`
  margin: 0;
  display: grid;
  place-items: center;
  margin-top: 40px;
`;

export const Post = styled.div`
width: 100%;
`;

export const Item1 = styled.p`
@media ${DEVICE.mobile} {
    margin-bottom: 20px;
    margin-left: 20px;
  }

  @media ${DEVICE.tablet} {
   display: none;
  }
`;

export const Box1 = styled.div`
@media ${DEVICE.mobile} {
    display: block;
  }

@media ${DEVICE.tablet} {
    display: flex;
    flex-direction: row-reverse;
   }

   @media ${DEVICE.laptop} {
    margin-right: 200px;
   }
`;

export const Item2 = styled.p`
@media ${DEVICE.mobile} {
    margin-bottom: 20px;
    margin-left: 60px;
   }

   @media ${DEVICE.tablet} {
    margin-bottom: 0px;
    margin-right: 40px;
    margin-left: 0px;
   }
`;

export const Box3 = styled.div`
@media ${DEVICE.mobile} {
    display: block;
  }

@media ${DEVICE.tablet} {
    display: flex;
    margin-right: 120px;
   }
`;

export const Item3 = styled.p`
@media ${DEVICE.mobile} {
    margin-bottom: 15px;
    margin-left: 80px;
   }

   @media ${DEVICE.tablet} {
    margin-bottom: 0px;
    margin-left: 0px;
   }
`;

export const Box2 = styled.div`
@media ${DEVICE.mobile} {
    display: flex;
   }
`;

export const Item4 = styled.p`
@media ${DEVICE.mobile} {
    margin-bottom: 50px;
    margin-left: 30px;
   }
`;

export const Item5 = styled.p`
@media ${DEVICE.mobile} {
    margin-left: 5px;
   }
`;

export const Item6 = styled.p`
@media ${DEVICE.mobile} {
    margin-bottom: 60px;
    margin-left: 80px;
   }

   @media ${DEVICE.tablet} {
    display: none;
   }
`;

export const TransactionsBox = styled.div`
@media ${DEVICE.tablet  } {
    margin-top: 50px;
   }
`;

export const Item7 = styled.p`
@media ${DEVICE.mobile} {
    margin-bottom: 10px;
    width: 280px;
    margin-left: auto;
    margin-right: auto;
   }

   @media ${DEVICE.tablet} {
    width: 600px;
    margin-bottom: 20px;
   }
`;

export const Item8 = styled.p`
@media ${DEVICE.mobile} {
    margin-bottom: 10px;
    width: 280px;
    margin-left: auto;
    margin-right: auto;
   }

   @media ${DEVICE.tablet} {
    width: 600px;
    margin-bottom: 20px;
   }
`;

export const Item9 = styled.p`
@media ${DEVICE.mobile} {
    margin-bottom: 10px;
    width: 280px;
    margin-left: auto;
    margin-right: auto;
   }

   @media ${DEVICE.tablet} {
    width: 600px;
    margin-bottom: 20px;
   }
`;

export const Item10 = styled.p`
@media ${DEVICE.mobile} {
    width: 280px;
    margin-left: auto;
    margin-right: auto;
   }

   @media ${DEVICE.tablet} {
    width: 600px;
    margin-bottom: 20px;
   }
`;

export const Box4 = styled.div`
   @media ${DEVICE.tablet} {
    display: none;
   }
`;

export const Box5 = styled.h1`
@media ${DEVICE.mobile} {
    display: none;
   }

   @media ${DEVICE.tablet} {
    display: block;
    width: 700px;
    margin-left: auto;
    margin-right: auto;
   }

   @media ${DEVICE.laptop} {
    width: 1100px;
   }
`;