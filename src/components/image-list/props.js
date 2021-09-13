import PropTypes from 'prop-types';

export const propTypes = {
  data: PropTypes.array.isRequired,
  loadMore: PropTypes.func.isRequired,
  isLoadingMore: PropTypes.bool.isRequired,
};

export const defaultProps = {};
