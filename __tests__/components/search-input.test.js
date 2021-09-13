import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {SearchInput} from '../../src/components/search-input';
import {render} from '../utils/theme-wrapper';

const onPressMock = jest.fn();

describe('SearchInput Component', () => {
  it('should match the Search Input snapshot', () => {
    const compTree = render(
      <SearchInput
        onChangeText={onPressMock}
        value="cat"
        title="search"
        placeholder="Type something"
        isLoading
        onPressSearchButton={onPressMock}
      />,
    );
    expect(compTree.toJSON()).toMatchSnapshot();
  });

  it('SearchInput should be editable', () => {
    const {getByPlaceholderText, getByTestId} = render(
      <SearchInput
        value="cat"
        title="search"
        placeholder="Type something"
        isLoading={false}
        onPressSearchButton={onPressMock}
      />,
    );
    fireEvent(getByPlaceholderText('Type something'), 'onChangeText', 'cat');
    fireEvent(getByTestId('searchBtn'), 'onPress');
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
