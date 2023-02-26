import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import {
  LoaderBox,
  Post,
  Item1,
  Box1,
  Item2,
  Box3,
  Item3,
  Box2,
  Item4,
  Item5,
  TransactionsBox,
  Item6,
  Item7,
  Item8,
  Item9,
  Box4,
  Box5,
} from '../LoaderOperationPageSkeleton/LoaderOperationPage.styled';

const LoaderOperationPage = () => {
  return (
    <LoaderBox>
      <Post>
        <Box1>
          <Item1>
            <Skeleton width={100} height={30} />
          </Item1>
          <Box3>
            <Item2>
              <Skeleton width={120} height={30} />
            </Item2>
            <Box2>
              <Item3>
                <Skeleton width={100} height={30} />
              </Item3>
              <Item4>
                <Skeleton width={100} height={30} />
              </Item4>
            </Box2>
          </Box3>
        </Box1>
        <Box4>
          <Item5>
            <Skeleton width={100} height={30} />
          </Item5>
          <TransactionsBox>
            <Item6>
              <Skeleton height={40} />
            </Item6>
            <Item7>
              <Skeleton height={40} />
            </Item7>
            <Item8>
              <Skeleton height={40} />
            </Item8>
            <Item9>
              <Skeleton height={40} />
            </Item9>
          </TransactionsBox>
        </Box4>
        <Box5>
          <Skeleton height={450} />
        </Box5>
      </Post>
    </LoaderBox>
  );
};

export default LoaderOperationPage;
