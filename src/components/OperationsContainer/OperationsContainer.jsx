import OperationsForm from 'components/OperationsForm/OperationsForm';
import OperationsSummary from 'components/OperationsSummary/OperationsSummary';
import OperationsTable from 'components/OperationsTable/OperationsTable';
import React from 'react';
import { Wrapper, WrapperTableSummary } from './OperationsContainer.styled';

import useMediaQuery from '@mui/material/useMediaQuery';

const OperationsContainer = ({ type }) => {
  const isScreenMorePhone = useMediaQuery('(min-width: 768px)');
  const middle = useMediaQuery('(max-width: 1279px)');
  const isScreenLaptop = useMediaQuery('(min-width: 1280px)');

  // useEffect(() => {

  // if ()

  // }, [third])

  return (
    <>
      <Wrapper>
        {isScreenMorePhone && <OperationsForm />}
        <WrapperTableSummary>
          <OperationsTable />
          {isScreenLaptop && <OperationsSummary />}
        </WrapperTableSummary>
      </Wrapper>
      {isScreenMorePhone && middle && <OperationsSummary />}
    </>
  );
};

export default OperationsContainer;
