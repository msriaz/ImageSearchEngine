import React, {useEffect, useState} from 'react';
import {
  StyledHeader,
  StyledWrapper,
  StyledButton,
  HeaderWrapper,
  StyledText,
} from './styled';
import {load, clear} from '../../utils/storage';
import {STORAGE_KEYS} from '../../utils/constants';
import {reportError} from '../../utils';
import {HistoryList} from './history-iist';

export const SearchHistory = ({onPressHistoryItem, searchQuery}) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, [searchQuery]);

  const loadHistory = async () => {
    try {
      const savedHistory = await load(STORAGE_KEYS.HISTORY);
      console.log('load more history');
      if (savedHistory) {
        setHistory(savedHistory);
      }
    } catch (error) {
      reportError('loadHistory', error);
    }
  };

  const onClearHistory = async () => {
    try {
      await clear();
      setHistory([]);
    } catch (error) {
      reportError('onClearHistory', error);
    }
  };

  return history?.length ? (
    <StyledWrapper>
      <HeaderWrapper>
        <StyledHeader>Search History</StyledHeader>
        <StyledButton onPress={onClearHistory}>Clear History</StyledButton>
      </HeaderWrapper>
      <HistoryList data={history} onPressHistoryItem={onPressHistoryItem} />
    </StyledWrapper>
  ) : (
    <StyledWrapper>
      <StyledText> No previous history found </StyledText>
    </StyledWrapper>
  );
};
