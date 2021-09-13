import React, {useState} from 'react';
import {APP_COLORS} from '../../../utils/constants';

import {propTypes, defaultProps} from './props';
import {Image, Loader, PreviewImage, Wrapper} from './styled';
import {getImageUrl} from '../../../utils';

/**
 * Image Item Component
 * @param {imageData} defines the data of image to render
 */
export const ImageItem = ({imageData}) => {
  const [isLoading, setIsLoading] = useState(true);

  const path = getImageUrl(imageData);

  return (
    <React.Fragment>
      {isLoading && (
        <Wrapper>
          <Loader color={APP_COLORS.GRAY} size="small" />
          <PreviewImage>
            <Image style={{position: 'absolute'}} source={{uri: path}} />
          </PreviewImage>
        </Wrapper>
      )}
      <Image
        source={{uri: path}}
        onLoadStart={() => setIsLoading(true)}
        onLoad={() => setIsLoading(false)}
      />
    </React.Fragment>
  );
};

ImageItem.propTypes = propTypes;
ImageItem.defaultProps = defaultProps;
