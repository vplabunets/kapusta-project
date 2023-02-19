import Icons from 'images/icons-sprite.svg';

import {
  ReportItemButton,
  Sum,
  Wrapper,
  ButtonReport,
  Type,
} from './ReportItem.styled';

export const ReportItem = ({ sum, icon, type }) => {
  const sumToFixed = sum.toFixed(2);

  return (
    <ReportItemButton>
      <Sum>{sumToFixed}</Sum>
      <Wrapper>
        <ButtonReport>
          <svg width="60" height="60">
            <use href={`${Icons}#icon-income-${icon}`}></use>
          </svg>
          <div></div>
        </ButtonReport>
      </Wrapper>
      <Type>{type}</Type>
    </ReportItemButton>
  );
};
