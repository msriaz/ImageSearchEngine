/**
 * The available spacing.
 * Please stick with these, and not freestyle it everywhere.
 *
 * 0 = none    - nothing. only here to bust out of a zero-based array.
 * 1 = xsmall  - elements contextually close to each other
 * 2 = small   - for groups of closely related items or perhaps borders
 * 3 = medium  - less than default
 * 4 = default - default spacing beween components
 * 5 = large   - between groups of content that aren't related?
 * 6 = huge    - huge space around components
 */

export const spacing = {
  xsmall: 4,
  small: 8,
  medium: 12,
  default: 16,
  large: 24,
  xlarge: 32,
  huge: 48,
};

export const radius = {
  default: 4,
  double: 8,
  half: 30,
  full: 50,
};
