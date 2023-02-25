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
import { useEffect } from 'react';

export const ReportItem = ({ sum, category, type, setIsActive, isActive }) => {
  const sumToFixed = sum.toFixed(2);
  const dispatch = useDispatch();
  const currentPeriod = useSelector(selectCurrentPeriod);

  const handleClick = e => {
    setIsActive(e.currentTarget.dataset.set);
    dispatch(
      getItemsCategoryReports({
        ...currentPeriod,
        operation: type,
        category,
      })
    );
  };

  useEffect(() => {
    if (isActive === true) {
      dispatch(
        getItemsCategoryReports({
          ...currentPeriod,
          operation: type,
          category,
        })
      );
      return;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, currentPeriod]);

  const getIconKey = category => {
    if (category.toLowerCase() === 'communal, communication') {
      return 'communal';
    }
    if (category.toLowerCase() === 'sports, hobbies') {
      return 'sports';
    }
    return category.toLowerCase();
  };

  return (
    <ReportItemButton>
      <Sum>{sumToFixed}</Sum>
      <Wrapper>
        <ButtonReport
          data-set={category.toLowerCase()}
          onClick={e => handleClick(e)}
          isActive={isActive}
        >
          <svg width="60" height="60">
            <use href={`${Icons}#icon-${type}-${getIconKey(category)}`}></use>
          </svg>
          <div></div>
        </ButtonReport>
      </Wrapper>
      <Type>{category}</Type>
    </ReportItemButton>
  );
};
