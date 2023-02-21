import styled from 'styled-components';
import device from 'constants/deviceSize';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  align-self: center;
  margin-top: 45px;
  @media ${device.tablet} {
    margin-top: 0px;
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-self: space-between;
  }
  @media ${device.laptop} {
    margin-top: 0px;
    width: 100%;
    flex-direction: row-reverse;
    justify-content: right;
    align-self: space-between;
  }
`;

export const OperationsModalOpenButton = styled.button`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  vertical-align: center;
  margin-top: 32px;
  margin-bottom: 32px;
  border: 2px solid #ffffff;
  background-color: transparent;

  svg {
    fill: #52555f;
  }

  border-radius: 50%;
  @media ${device.tablet} {
    display: none;
  }
`;
// svg {
//   position: absolute;
//   /* top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   stroke: red; */
//   top: 50;

//   align-items: center;
//   justify-content: center;
// }
