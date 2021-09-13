import React, {useEffect, useState} from 'react';
import {
  StyledTextInput,
  StyledButton,
  StyledWrapper,
  StyledSpinner,
  SpinnerWrapper,
} from './styled';
import {props, defaultProps} from './props';
import {reportError, usePrevious} from '../../utils';
import {save, load} from '../../utils/storage';
import {APP_COLORS, STORAGE_KEYS} from '../../utils/constants';
import {Spinner} from '../spinner';
/**
 * Search Input Component
 * @param {onPressSearchButton} defines the action to happen on search button press
 * @param {placeholder} defines size of the placeholder of Text Input
 * @param {rest} defines additional props to be passed to TextInput
 * @param {title} defines title of search button
 */

export const SearchInput = ({
  onPressSearchButton,
  placeholder,
  title,
  value,
  isLoading,
  rest,
}) => {
  const [text, onChangeText] = useState('');
  const previousText = usePrevious({text});

  useEffect(() => {
    onChangeText(value);
  }, [value]);

  const onPressSearchButtonHandler = () => {
    if (text !== previousText.text) {
      onPressSearchButton(text);
      saveToStorage();
    }
  };

  const saveToStorage = async () => {
    try {
      const savedHistory = await load(STORAGE_KEYS.HISTORY);
      console.log('@@@ saved history', savedHistory);
      if (savedHistory?.indexOf(text) === -1 || !savedHistory) {
        const updatedHistory = savedHistory ? [...savedHistory, text] : [text];
        await save(STORAGE_KEYS.HISTORY, updatedHistory);
      }
    } catch (error) {
      reportError('saveToStorage', error);
    }
  };

  return (
    <StyledWrapper>
      <StyledTextInput
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
        {...rest}
      />
      {isLoading ? (
        <SpinnerWrapper>
          <StyledSpinner
            variant={Spinner.VARIANTS.SMALL}
            color={APP_COLORS.BLUE}
          />
        </SpinnerWrapper>
      ) : (
        <StyledButton
          onPress={onPressSearchButtonHandler}
          title={title}
          disabled={text === previousText?.text}
          testID="searchBtn"
        />
      )}
    </StyledWrapper>
  );
};

SearchInput.props = props;
SearchInput.defaultProps = defaultProps;
