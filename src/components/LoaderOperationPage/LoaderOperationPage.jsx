import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { LoaderBox, Item1, Box1, Item2, Box3, Item3, Box2, Item4, Item5, TransactionsBox, Item6, Item7, Item8, Item9, Item10, Box4, Box5 } from '../LoaderOperationsPageSkeleton/LoaderOperationsPageSkeleton.styled';



const LoaderOperationPage = () => {
    return (
        <LoaderBox>
            <div>
            <Item1><Skeleton width={159} height={30} /></Item1>
            <Box1>
            <Item2><Skeleton width={159} height={30} /></Item2>
            <Box3>
            <Item3><Skeleton width={120} height={30} /></Item3>
            <Box2>
                <Item4><Skeleton width={100} height={30} /></Item4>
                <Item5><Skeleton width={100} height={30} /></Item5>
            </Box2>
            </Box3>
            </Box1>
            <Box4>
            <Item6><Skeleton width={100} height={30} /></Item6>
            <TransactionsBox>
            <Item7><Skeleton height={40} /></Item7>
            <Item8><Skeleton height={40} /></Item8>
            <Item9><Skeleton height={40} /></Item9>
            <Item10><Skeleton height={40} /></Item10>
            </TransactionsBox>
            </Box4>
            <Box5><Skeleton height={500}/></Box5>
    </div>
        </LoaderBox>    
    )
};

export default LoaderOperationPage;