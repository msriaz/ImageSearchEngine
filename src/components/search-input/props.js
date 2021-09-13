import PropTypes from 'prop-types';

export const propTypes = {
  onPressSearchButton: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export const defaultProps = {
  placeholder: 'search images',
  title: 'Search',
};
