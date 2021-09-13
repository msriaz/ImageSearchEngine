import React, {forwardRef} from 'react';
import {FlatList} from 'react-native';
import {props, defaultProps} from './props';

import {ImageItem} from './image-item';
import {Spinner} from '../spinner';

/**
 * Image Item Component
 * @param {data} defines the data of images to render
 * @param {loadMore} defines the function to be called for loading more data
 * @param {rest} defines additional props to pass to FlatList
 * @param {isLoadingMore} defines to load more
 */
export const ImageList = forwardRef(
  ({data, loadMore, isLoadingMore, rest}, ref) => {
    const renderItem = ({item}) => <ImageItem imageData={item} key={item.id} />;

    const ListFooterComponent = () =>
      isLoadingMore ? <Spinner variant={Spinner.VARIANTS.SMALL} /> : null;

    return (
      <FlatList
        ref={ref}
        data={data}
        renderItem={renderItem}
        horizontal={false}
        numColumns={2}
        onEndReached={loadMore}
        ListFooterComponent={ListFooterComponent}
        {...rest}
      />
    );
  },
);

ImageList.props = props;
ImageList.defaultProps = defaultProps;
