import Icons from 'images/icons-sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPeriod } from 'redux/reports/selectors';
import { getItemsCategoryReports } from 'redux/reports/operations';
import {
  ReportItemButton,
  Sum,
  Wrapper,
  ButtonReport,
  Type,
} from './ReportItem.styled';
import { useState } from 'react';

export const ReportItem = ({ sum, icon, category, type, btn }) => {
  const [isActive, setIsActive] = useState(false);
  const sumToFixed = sum.toFixed(2);
  const dispatch = useDispatch();
  const currentPeriod = useSelector(selectCurrentPeriod);

  const handleClick = (category, btn) => {
    if (btn === category) {
      console.log('asdasd');
      setIsActive(true);
    } else setIsActive(false);

    dispatch(
      getItemsCategoryReports({
        ...currentPeriod,
        operation: type,
        category,
      })
    );
  };

  return (
    <ReportItemButton>
      <Sum>{sumToFixed}</Sum>
      <Wrapper>
        <ButtonReport
          isActive={isActive}
          onClick={() => handleClick(category, btn)}
        >
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
