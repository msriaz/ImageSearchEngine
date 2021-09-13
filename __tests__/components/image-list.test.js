import React from 'react';
import {ImageList} from '../../src/components/image-list';
import {render} from '../utils/theme-wrapper';

const onPressMock = jest.fn();

const mockData = [
  {
    id: '51443585974',
    secret: '0e481ab487',
    server: '65535',
    farm: 66,
  },
  {
    id: '51442086532',
    secret: '39646048b3',
    server: '65535',
    farm: 66,
  },
  {
    id: '51443091678',
    secret: '6e5837e79a',
    server: '65535',
    farm: 66,
  },
];

describe('Image List Component', () => {
  it('should match the Image List  snapshot', () => {
    const compTree = render(
      <ImageList data={mockData} loadMore={onPressMock} isLoadingMore />,
    );
    expect(compTree.toJSON()).toMatchSnapshot();
  });
});
