import Icons from 'images/icons-sprite.svg';
import { useTranslation } from 'react-i18next';
import { BackLink } from './ReportsReturnBack.styled';

const ReportsReturnBack = () => {
  const { t } = useTranslation();
  return (
    <BackLink to="/operations">
      <svg width="24" height="24">
        <use href={`${Icons}#icon-arrow-back`}></use>
      </svg>
      <p>{t('Main page')}</p>
    </BackLink>
  );
};

export default ReportsReturnBack;
