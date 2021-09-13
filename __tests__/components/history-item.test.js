import React from 'react';
import {fireEvent} from '@testing-library/react-native';

import {HistoryItem} from '../../src/components/search-history/history-iist/history-item';
import {render} from '../utils/theme-wrapper';

const onPressMock = jest.fn();
const mockItem = 'test item';

describe('History Item Component', () => {
  it('should match the History Item  snapshot', () => {
    const compTree = render(
      <HistoryItem title={mockItem} onPressHistoryItem={onPressMock} />,
    );
    expect(compTree.toJSON()).toMatchSnapshot();
  });

  it('History Item should be displayed', () => {
    const {getByText} = render(
      <HistoryItem title={mockItem} onPressHistoryItem={onPressMock} />,
    );
    fireEvent.press(getByText(mockItem));
    expect(onPressMock).toHaveBeenCalled();
  });
});
