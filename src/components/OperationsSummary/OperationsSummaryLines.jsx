import { useTranslation } from 'react-i18next';

import changeMonth from 'helpers/changeMonth';

import { Row, Cell } from './OperationsSummary.styled';

const OperationsSummaryLines = ({ month, sum }) => {
  const { t } = useTranslation();

  return (
    <Row key={sum}>
      <Cell>{t(changeMonth(month))}</Cell>
      <Cell>{sum}.00</Cell>
    </Row>
  );
};

export default OperationsSummaryLines;
