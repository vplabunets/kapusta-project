import styled from 'styled-components';
import device from '../../constants/deviceSize';

export const LoaderBox = styled.div`
height: 100vh;
margin: 0;
display: grid;
place-items: center;
margin-top: 70px;
`;


export const Post = styled.div`
@media ${device.mobile} {
display: block;
}

@media ${device.laptop} {
display: flex;
}
`;

export const LeftCol = styled.div`
    height: 139px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media ${device.mobile} {
        width: 300px;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 80px;
        }

    @media ${device.laptop} {
        padding-top: 200px;
        width: 377px;
        margin-right: 200px;
        margin-left: 0px;
        margin-bottom: 0px;
    }
`;

export const RightCol = styled.div`
    flex: 1;
    height: 350px;
    border-radius: 30px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);

    @media ${device.mobile} {
        width: 300px;
        padding-top: 50px;
        margin-left: 10px;
        }

    @media ${device.tablet} {
        padding-top: 50px;
    }

    @media ${device.laptop} {
    padding-top: 80px;
    }
`;

export const RightColBox = styled.div`
height: 552px;
width: 426px;

@media ${device.mobile} {
    width: 300px;
    }
`;



