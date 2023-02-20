import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { LoaderBox, Post, LeftCol, RightCol, RightColBox } from '../LoaderHomePageSkeleton/LoaderHomePage.styled';



const LoaderHomePage = () => {
    return (
        <LoaderBox>
            <Post>
        <LeftCol>
            <h1 style={{ marginBottom: 20 }}><Skeleton width={300} height={100} /></h1>
            <p><Skeleton width={159} height={30} /></p>
        </LeftCol>
        <RightCol>
            <RightColBox>
                <div style={{ display: "grid", justifyContent: 'space-evenly', justifyItems: "center" }}>
                  <h2 style={{ marginBottom: 20 }}><Skeleton width={300} height={30} /></h2>
                  <p style={{ marginBottom: 20 }}><Skeleton width={120} height={30} /></p>
                  <h2 style={{ marginBottom: 20 }}><Skeleton width={300} height={30} /></h2>
                </div>
                <div style={{ display: "grid", justifyContent: 'space-evenly', justifyItems: "center" }}>
                  <h2 style={{ marginBottom: 20 }}><Skeleton width={300} height={30} /></h2>
                  <h2 style={{ marginBottom: 20 }}><Skeleton width={300} height={30} /></h2>
                </div>
            <div style={{ display: "flex", justifyContent: 'center' }} >
                <p style={{ marginBottom: 20, marginRight: 10 }}><Skeleton width={120} height={30} /></p>
                <p><Skeleton width={120} height={30} /></p>
            </div>
            </RightColBox>
        </RightCol>
    </Post>
        </LoaderBox>    
    )
};

export default LoaderHomePage;

