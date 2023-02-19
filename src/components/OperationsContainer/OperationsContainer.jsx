import OperationsForm from 'components/OperationsForm/OperationsForm';
import OperationsSummary from 'components/OperationsSummary/OperationsSummary';
import OperationsTable from 'components/OperationsTable/OperationsTable';
import React, { useEffect, useState } from 'react';
import { Grid, Wrapper } from './OperationsContatiner.styled';

const OperationsContainer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const windowInnerWidth = window.innerWidth;
  useEffect(() => {
    if (windowInnerWidth > 768) {
      setIsFormOpen(true);
    }
  }, [windowInnerWidth, isFormOpen]);

  return (
    <Wrapper>
      <Grid>
        {isFormOpen && <OperationsForm />}
        {isFormOpen && <OperationsTable />}
        <OperationsSummary />
      </Grid>
    </Wrapper>
  );
};

export default OperationsContainer;
