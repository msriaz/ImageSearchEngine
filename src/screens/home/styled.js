import {SafeAreaView, Platform, StatusBar} from 'react-native';
import styled from 'styled-components/native';

export const StyledWrapper = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${Platform.select({
    android: StatusBar.currentHeight,
    ios: 0,
  })}px;
`;

export const StyledText = styled.Text`
  font-size: 12px;
  font-weight: 200;
`;

export const ResultsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: ${({theme}) => theme.spacing.default}px;
`;
