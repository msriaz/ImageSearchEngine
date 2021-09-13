import React, {forwardRef} from 'react';
import {FlatList} from 'react-native';

import {HistoryItem} from './history-item';

/**
 * Image Item Component
 * @param {data} defines the data of images to render
 * @param {loadMore} defines the function to be called for loading more data
 * @param {rest} defines additional props to pass to FlatList
 */
export const HistoryList = ({data, onPressHistoryItem, rest}) => {
  const renderItem = ({item}) => (
    <HistoryItem
      title={item}
      key={item}
      onPressHistoryItem={onPressHistoryItem}
    />
  );

  return (
    <FlatList data={data} renderItem={renderItem} {...rest} />
  );
};
