import React from 'react';
import { PropTypes } from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';

import OperationsForm from 'components/OperationsForm/OperationsForm';
import OperationsSummary from 'components/OperationsSummary/OperationsSummary';
import OperationsTable from 'components/OperationsTable/OperationsTable';

import { Wrapper, WrapperTableSummary } from './OperationsContainer.styled';

const OperationsContainer = ({ value }) => {
  const isScreenMorePhone = useMediaQuery('(min-width: 768px)');
  const middle = useMediaQuery('(max-width: 1279px)');
  const isScreenLaptop = useMediaQuery('(min-width: 1280px)');

  return (
    <>
      <Wrapper>
        {isScreenMorePhone && <OperationsForm value={value} />}
        <WrapperTableSummary>
          <OperationsTable />
          {isScreenLaptop && <OperationsSummary />}
        </WrapperTableSummary>
      </Wrapper>
      {isScreenMorePhone && middle && <OperationsSummary />}
    </>
  );
};

OperationsContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default OperationsContainer;
