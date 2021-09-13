import React from 'react';
import {Home} from '../../src/screens/home';
import {render} from '../utils/theme-wrapper';

describe('Home Component', () => {
  it('should match the Home  snapshot', () => {
    const compTree = render(<Home />);
    expect(compTree.toJSON()).toMatchSnapshot();
  });
});
