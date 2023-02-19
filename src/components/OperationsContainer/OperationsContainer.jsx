import OperationsSummary from 'components/OperationsSummary/OperationsSummary';
import OperationsTable from 'components/OperationsTable/OperationsTable';
import OperationsTypeSwitcher from 'components/OperationsTypeSwitcher/OperationsTypeSwitcher';
import React from 'react';
import { Grid, Wrapper } from './OperationsContatiner.styled';

const OperationsContainer = () => {
  return (
    <Wrapper>
      <OperationsTypeSwitcher />
      <Grid>
        <div
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 1,
            gridRowStart: 1,
            gridRowEnd: 2,
          }}
        >
          Form
        </div>
        <OperationsTable />
        <OperationsSummary />
      </Grid>
    </Wrapper>
  );
};

export default OperationsContainer;
