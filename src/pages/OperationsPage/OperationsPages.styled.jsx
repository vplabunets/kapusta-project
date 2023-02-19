import styled from 'styled-components';
import device from 'constants/deviceSize';

const OperationsPageWrapper = styled.div`
  position: relative;
  /* min-height: 100%; */
  width: 320px;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  /* justify-content: center; */
  margin: 19px 20px 0 20px;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 768px;
    margin: 40px 32px 60px 32px;
  }
  @media ${device.laptop} {
    margin: 40px 91px 83px 91px;
  }
`;
export default OperationsPageWrapper;
