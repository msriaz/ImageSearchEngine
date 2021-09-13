/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import {render} from './utils/theme-wrapper';

describe('App Component', () => {
  it('should match the ActionCardItemSkeleton snapshot', () => {
    const compTree = render(<App />);
    expect(compTree.toJSON()).toMatchSnapshot();
  });
});
