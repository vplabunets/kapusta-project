import OperationsForm from 'components/OperationsForm/OperationsForm';
import OperationsSummary from 'components/OperationsSummary/OperationsSummary';
import OperationsTable from 'components/OperationsTable/OperationsTable';
import React from 'react';
import { Wrapper, WrapperTableSummary } from './OperationsContainer.styled';

import useMediaQuery from '@mui/material/useMediaQuery';

const OperationsContainer = ({ type }) => {
  const isScreenMorePhone = useMediaQuery('(min-width: 768px)');

  return (
    <Wrapper>
      {isScreenMorePhone && <OperationsForm />}
      <WrapperTableSummary>
        <OperationsTable />
        {isScreenMorePhone && <OperationsSummary />}
      </WrapperTableSummary>
    </Wrapper>
  );
};

export default OperationsContainer;
