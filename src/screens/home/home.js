import React, {useRef, useState} from 'react';
import axios from 'axios';
import {API_URL} from '../../config';
import {SearchInput} from '../../components/search-input/search-input';
import {SearchHistory} from '../../components/search-history';
import {ImageList} from '../../components/image-list/image-list';
import {StyledWrapper, StyledText, ResultsWrapper} from './styled';
import {reportError} from '../../utils';

export const Home = () => {
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isHistoryVisible, setIsHistoryVisible] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [metaData, setMetaData] = useState(null);
  const [data, setData] = useState(null);
  const [searchText, setSearchText] = useState('');
  const flatListRef = useRef();

  const searchImage = async searchQuery => {
    const searchURL = `${API_URL}${pageNo}&text=${searchQuery}`;
    setIsLoading(true);
    try {
      const searchResponse = await axios.get(searchURL);
      setMetaData({
        totalRecords: searchResponse?.data?.photos?.total,
        totalPages: searchResponse?.data?.photos?.pages,
      });
      if (data?.length > 0) {
        flatListRef.current.scrollToIndex({animated: true, index: 0});
        setIsHistoryVisible(false);
      } else {
        setIsHistoryVisible(true);
      }

      setData(searchResponse?.data?.photos?.photo);
    } catch (error) {
      reportError('searchImage', error);
      setMetaData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = async () => {
    if (pageNo === metaData.totalPages) {
      /** no more records to load */
      return;
    }
    const nextPage = pageNo + 1;
    setPageNo(nextPage);
    const searchURL = `${API_URL}${nextPage}&text=${searchText}`;
    setIsLoadingMore(true);
    try {
      const searchResponse = await axios.get(searchURL);
      const newData = data.concat(searchResponse?.data?.photos?.photo);
      setData(newData);
    } catch (error) {
      reportError('loadMore', error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  const onPressHistoryItem = searchQuery => {
    searchImage(searchQuery);
    setSearchText(searchQuery);
  };

  const renderResultMeta = () => {
    if (!isLoading && data?.length === 0) {
      return (
        <ResultsWrapper>
          <StyledText>No result found</StyledText>
        </ResultsWrapper>
      );
    } else if (metaData?.totalRecords && data?.length > 0) {
      return (
        <ResultsWrapper>
          <StyledText>About {metaData?.totalRecords} results</StyledText>
          <StyledText onPress={() => setIsHistoryVisible(!isHistoryVisible)}>
            {!isHistoryVisible ? 'Show' : 'Hide'} History
          </StyledText>
        </ResultsWrapper>
      );
    }
  };
  return (
    <StyledWrapper>
      <SearchInput
        onPressSearchButton={searchImage}
        value={searchText}
        isLoading={isLoading}
      />
      {renderResultMeta()}
      {isHistoryVisible ? (
        <SearchHistory onPressHistoryItem={onPressHistoryItem} />
      ) : null}
      {data ? (
        <ImageList
          data={data}
          ref={flatListRef}
          loadMore={loadMore}
          isLoadingMore={isLoadingMore}
        />
      ) : null}
    </StyledWrapper>
  );
};
