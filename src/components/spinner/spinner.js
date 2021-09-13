import React from 'react';
import {ActivityIndicator} from 'react-native';
import {defaultProps, propTypes} from './props';

import {SPINNER_VARIANTS, SPINNER_SIZE} from './styled';

/**
 * Spinner Component
 * Simple wrapper around native ActivityIndicator
 * @param {color} defines color of the spinner
 * @param {variant} defines size of the spinner ["large", "small"]
 * @param {...props} defines additional props to be passed to ActivityIndicator
 */

export const Spinner = ({color, variant, ...props}) => {
  const size = SPINNER_SIZE[variant];

  return <ActivityIndicator color={color} size={size} {...props} />;
};

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

Spinner.VARIANTS = SPINNER_VARIANTS;
