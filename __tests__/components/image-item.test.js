import React from 'react';
import {ImageItem} from '../../src/components/image-list/image-item';
import {render} from '../utils/theme-wrapper';

const mockData = {
  id: '51443585974',
  secret: '0e481ab487',
  server: '65535',
  farm: 66,
};

describe('Image Item Component', () => {
  it('should match the Image Item  snapshot', () => {
    const compTree = render(<ImageItem imageData={mockData} />);
    expect(compTree.toJSON()).toMatchSnapshot();
  });
});
