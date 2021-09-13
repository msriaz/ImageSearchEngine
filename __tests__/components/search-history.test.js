import React from 'react';
import {SearchHistory} from '../../src/components/search-history';
import {render} from '../utils/theme-wrapper';

const onPressMock = jest.fn();

describe('Search History Component', () => {
  it('should match the Search History  snapshot', () => {
    const compTree = render(<SearchHistory onPressHistoryItem={onPressMock} />);
    expect(compTree.toJSON()).toMatchSnapshot();
  });
});
