import styled from 'styled-components';
import device from 'constants/deviceSize';

const ReportsPageWrapper = styled.div`
  margin: 19px 20px 0 20px;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    justify-content: center;
    margin: 40px 32px 60px 32px;
  }
  @media ${device.laptop} {
    margin: 40px 91px 83px 91px;
    /* width: 1280px; */
  }
`;
export default ReportsPageWrapper;
