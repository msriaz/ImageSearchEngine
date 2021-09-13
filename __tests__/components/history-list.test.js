import React from 'react';
import {HistoryList} from '../../src/components/search-history/history-iist';
import {render} from '../utils/theme-wrapper';

const onPressMock = jest.fn();
const mockData = ['cats', 'dogs', 'cows', 'goats'];

describe('History List Component', () => {
  it('should match the History List  snapshot', () => {
    const compTree = render(
      <HistoryList data={mockData} onPressHistoryItem={onPressMock} />,
    );
    expect(compTree.toJSON()).toMatchSnapshot();
  });
});
