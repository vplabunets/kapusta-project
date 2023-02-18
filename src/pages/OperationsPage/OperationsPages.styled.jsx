import styled from 'styled-components';
import device from 'constants/deviceSize';

const OperationsPageWrapper = styled.div`
  margin: 19px 20px 0 20px;

  @media ${device.tablet} {
    display: flex;
    margin: 40px 32px 60px 32px;
  }
  @media ${device.laptop} {
    margin: 40px 91px 83px 91px;
  }
`;
export default OperationsPageWrapper;
