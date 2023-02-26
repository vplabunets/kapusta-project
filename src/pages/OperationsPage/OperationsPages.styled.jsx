import styled from 'styled-components';
import DEVICE from 'constants/deviceSize';

const OperationsPageWrapper = styled.div`
  position: relative;
  min-height: 100%;
  width: 320px;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  margin: 19px 20px 0 20px;

  @media ${DEVICE.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 768px;
    margin: 40px 32px 60px 32px;
  }
  @media ${DEVICE.laptop} {
    width: 1098px;
    margin: 40px 91px 83px 91px;
  }
`;
export default OperationsPageWrapper;
