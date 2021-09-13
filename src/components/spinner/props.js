import PropTypes from 'prop-types';
import {SPINNER_VARIANTS} from './styled';

export const propTypes = {
  /**
   * Color from themes, is an enum
   */
  color: PropTypes.string,
  /**
   * Size of the spinner, "small" or "large"
   */
  variant: PropTypes.oneOf(Object.values(SPINNER_VARIANTS)),
};

export const defaultProps = {
  variant: SPINNER_VARIANTS.SMALL,
};
