import styled from 'styled-components';
import device from 'constants/deviceSize';

// export const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   @media ${device.tablet} {
//     /* margin-top: 60px; */
//   }
//   @media ${device.laptop} {
//   }
// `;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    height: 579px;
    padding: 32px 32px 83px 32px;
    background-color: #ffffff;
  }
  @media ${device.laptop} {
    height: 579px;
    padding: 32px 32px 83px 32px;
    background-color: #ffffff;
  }
`;
