import { PropTypes } from 'prop-types';

import { CabbageList } from '../Cabbage/Cabbage';

import { BackgroundGrey, BackgroundWhite } from './AnimateBackground.styled';

export const AnimateBackground = ({ white }) => {
  if (white)
    return (
      <BackgroundWhite>
        <CabbageList />
      </BackgroundWhite>
    );

  return (
    <BackgroundGrey>
      <CabbageList />
    </BackgroundGrey>
  );
};

AnimateBackground.propTypes = {
  white: PropTypes.bool.isRequired,
};
