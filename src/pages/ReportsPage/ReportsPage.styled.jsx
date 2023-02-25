import styled from 'styled-components';
import DEVICE from 'constants/deviceSize';
//
const ReportsPageWrapper = styled.div`
  margin: 19px 20px 0 20px;
  display: flex;
  flex-direction: column;

  @media ${DEVICE.tablet} {
    justify-content: center;
    margin: 40px 32px 60px 32px;
  }
  @media ${DEVICE.laptop} {
    margin: 40px 91px 83px 91px;
  }
`;
export default ReportsPageWrapper;
