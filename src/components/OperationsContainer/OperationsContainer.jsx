import OperationsForm from 'components/OperationsForm/OperationsForm';
import OperationsSummary from 'components/OperationsSummary/OperationsSummary';
import OperationsTable from 'components/OperationsTable/OperationsTable';
import React from 'react';
import { Wrapper } from './OperationsContainer.styled';

import useMediaQuery from '@mui/material/useMediaQuery';

const OperationsContainer = ({ type }) => {
  const isScreenMorePhone = useMediaQuery('(min-width: 768px)');

  return (
    <Wrapper>
      {true && <OperationsForm />}
      {isScreenMorePhone && <OperationsTable />}
      <OperationsSummary />
    </Wrapper>
  );
};

export default OperationsContainer;
