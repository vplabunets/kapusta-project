import Icons from 'images/icons-sprite.svg';

import {
  ReportItemButton,
  Sum,
  Wrapper,
  ButtonReport,
  Type,
} from './ReportItem.styled';

export const ReportItem = ({ sum, icon, category, type }) => {
  const sumToFixed = sum.toFixed(2);

  return (
    <ReportItemButton>
      <Sum>{sumToFixed}</Sum>
      <Wrapper>
        <ButtonReport>
          <svg width="60" height="60">
            <use href={`${Icons}#icon-${type}-${icon}`}></use>
          </svg>
          <div></div>
        </ButtonReport>
      </Wrapper>
      <Type>{category}</Type>
    </ReportItemButton>
  );
};
