import React from 'react';

import {render} from '../utils/theme-wrapper';
import {Spinner} from '../../src/components/spinner';

describe('Spinner Component', () => {
  it('should match the Spinner snapshot', () => {
    const compTree = render(<Spinner />);
    expect(compTree.toJSON()).toMatchSnapshot();
  });
});
