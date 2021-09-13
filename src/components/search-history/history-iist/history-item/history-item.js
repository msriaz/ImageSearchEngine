import React from 'react';
import {propTypes, defaultProps} from './props';

import {StyledWrapper, StyledItem} from './styled';
/**
 * Image Item Component
 * @param {title} defines the title of history item
 * @param {onPressHistoryItem} defines the action to be called on pressing history item
 */
export const HistoryItem = ({title, onPressHistoryItem}) => {
  const onPressHistoryItemHandler = () => onPressHistoryItem(title);
  return (
    <StyledWrapper onPress={onPressHistoryItemHandler}>
      <StyledItem>{title}</StyledItem>
    </StyledWrapper>
  );
};

HistoryItem.propTypes = propTypes;
HistoryItem.defaultProps = defaultProps;
