import PropTypes from 'prop-types';

export const propTypes = {
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  title: PropTypes.string,
};

export const defaultProps = {
  placeholder: 'search images',
  title: 'Search',
};
